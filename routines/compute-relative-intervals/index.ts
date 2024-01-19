import type Pitch from '../../types/Pitch';
import type TwelveToneSeries from '../../types/TwelveToneSeries';

function computeRelativeIntervals(series: TwelveToneSeries): number[] {
	return series.map((pitch: Pitch, index: number): number => (
		index === 0 ? 0 : pitch - series[index - 1]
	));
}

export default computeRelativeIntervals;
