import type TwelveToneSeries from '../../types/TwelveToneSeries';
import type Pitch from '../../types/Pitch';

const PITCHES: TwelveToneSeries = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function randomTwelveToneSeries(): TwelveToneSeries {
	const series: TwelveToneSeries = PITCHES;

	for(let i = series.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = series[i];
		
		series[i] = series[j];
		series[j] = temp;
	}

	return series;
}

export default randomTwelveToneSeries;
