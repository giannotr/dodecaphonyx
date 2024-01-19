import computeRelativeIntervals from '../compute-relative-intervals';
import computeSeriesfromIntervals from '../compute-series-from-intervals';

import type TwelveToneSeries from '../../types/TwelveToneSeries';

function computeInverse(series: TwelveToneSeries): TwelveToneSeries | Error {
	const relativeIntervals = computeRelativeIntervals(series);
	const invertedRelativeIntervals = [];

	for(let interval of relativeIntervals) {
		const nextInterval = -1 * interval;

		invertedRelativeIntervals.push(nextInterval);
	}

	return computeSeriesfromIntervals(series[0], invertedRelativeIntervals);
}

export default computeInverse;
