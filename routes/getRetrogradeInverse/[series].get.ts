import computeRetrograde from '../../routines/compute-retrograde';
import computeInverse from '../../routines/compute-inverse';

import type TwelveToneSeries from '../../types/TwelveToneSeries';

export default eventHandler((event) => {
	const { series } = event.context.params;

	const seriesArray: unknown = series.split(',').map((interval: string) => (
		Number(interval)
	));

	let message: string, data: undefined | TwelveToneSeries | Error;

	if(isTwelveToneSeries(seriesArray as number[])) {
		data = computeInverse(computeRetrograde(seriesArray as TwelveToneSeries));
		message = `Here you have the retrograde inverse (RI) of the original series (P).`;

		if(data instanceof Error) {
			message = data.cause as string || '';
			data = undefined;
		}
	} else {
		message = `The given series is not a twelve tone series`;
	}

	return { message, data };
});
