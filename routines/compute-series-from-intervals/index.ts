import isPitch from '../../utils/is-pitch';
import { computationsNotPitchesError, intervalsWrongLengthError } from '../../utils/errors';

import type Pitch from '../../types/Pitch';
import type TwelveToneSeries from '../../types/TwelveToneSeries';

function seriesFromIntervals(
	seed: Pitch,
	intervals: number[],
): TwelveToneSeries | Error {
	const series: unknown = [];
	let nextPitch = seed;

	for(let interval of intervals) {
		const nextPitchModulus = (nextPitch + interval) % 12;
		nextPitch = nextPitchModulus < 0 ? nextPitchModulus + 12 : nextPitchModulus;

		if(isPitch(nextPitch)) {
			(series as Pitch[]).push(nextPitch);
		} else {
			return computationsNotPitchesError;
		}
		
	}

	if((series as Pitch[]).length === 12) {
		return series as TwelveToneSeries;
	} else {
		return intervalsWrongLengthError;
	}
}

export default seriesFromIntervals;
