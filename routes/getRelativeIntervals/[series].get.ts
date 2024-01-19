import computeRelativeIntervals from '../../routines/compute-relative-intervals';
import isTwelveToneSeries from '../../utils/is-twelve-tone-series';

import type Pitch from '../../types/Pitch';
import type TwelveToneSeries from '../../types/TwelveToneSeries';

export default eventHandler((event) => {
	const { series } = event.context.params;

	const seriesArray: unknown = series.split(',').map((interval: string) => (
		Number(interval) as Pitch
	));

	let message: string, data: number[];

	if(isTwelveToneSeries(seriesArray as number[])) {
		message = 'Here you have the relative intervals to the series you input.';
		data = computeRelativeIntervals(seriesArray as TwelveToneSeries);
	} else {
		message = 'The provided series has to be an actual twelve tone series.';
	}

	return { message, data };
});
