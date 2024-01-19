import seriesFromIntervals from '../../../routines/compute-series-from-intervals';
import isPitch from '../../../utils/is-pitch';

import type Pitch from '../../../types/Pitch';
import type TwelveToneSeries from '../../../types/TwelveToneSeries';
// import isTwelveToneSeries from '../../../utils/is-twelve-tone-series';

export default eventHandler((event) => {
	const { seed, intervals } = event.context.params;

	const seedNumer = Number(seed);
	const intervalsArray = intervals.split(',').map((interval: string) => (
		Number(interval)
	));

	let message: string, data: undefined | Error | TwelveToneSeries;

	if(isPitch(Number(seed)) && intervalsArray.length === 12) {
		data = seriesFromIntervals(seedNumer as Pitch, intervalsArray);

		if(data instanceof Error) {
			message = data.cause as string || '';
			data = undefined;
		}

		message = 'Here is the computed series from the relative intervals';
	} else {
		message = 'Your seed number is out of bounds or the number of intervals provided is wrong.';
	}

	return { message, data };
});
