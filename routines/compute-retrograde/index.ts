import TwelveToneSeries from '../../types/TwelveToneSeries';

function computeRetrograde(series: TwelveToneSeries): TwelveToneSeries {
	const retrograde: unknown = series.reverse();

	return retrograde as TwelveToneSeries;
}

export default computeRetrograde;
