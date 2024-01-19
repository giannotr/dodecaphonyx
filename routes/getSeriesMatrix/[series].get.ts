import computeInverse from '../../routines/compute-inverse';

import type TwelveToneSeries from '../../types/TwelveToneSeries';

export default eventHandler((event) => {
	const { series } = event.context.params;

	const seriesArray: unknown = series.split(',').map((interval: string) => (
		Number(interval)
	));

	let message: string, data: undefined | TwelveToneSeries[];

	if(isTwelveToneSeries(seriesArray as number[])) {
		data = [];
		message = `Here you have the complete series matrix.`;

		for(let i = 0; i < 12; i++) {
			const nextSeries: unknown = (seriesArray as TwelveToneSeries).map((pitch) => ((pitch + i) % 12));
			data.push(nextSeries as TwelveToneSeries);
		}

	} else {
		message = `The given series is not a twelve tone series`;
	}

	return { data, message };
});
