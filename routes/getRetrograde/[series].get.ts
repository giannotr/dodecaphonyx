import computeRetrograde from '../../routines/compute-retrograde';

// import type Pitch from '../../types/Pitch';
import type TwelveToneSeries from '../../types/TwelveToneSeries';

export default eventHandler((event) => {
	const { series } = event.context.params;

	const seriesArray: unknown = series.split(',').map((interval: string) => (
		Number(interval)
	));

	let message: string, data: undefined | TwelveToneSeries;

	if(isTwelveToneSeries(seriesArray as number[])) {
		data = computeRetrograde(seriesArray as TwelveToneSeries);
		message = `Here you have the retrograde (R) of the original series (P).`;
	} else {
		message = `The given series is not a twelve tone series`;
	}

	return { message, data };
});
