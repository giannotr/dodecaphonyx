import computeInverse from '../compute-inverse';
import computeRetrograde from '../compute-retrograde';

import type TwelveToneSeries from '../../types/TwelveToneSeries';

function computeRetrogradeInverse(series: TwelveToneSeries): TwelveToneSeries | Error {
	return computeInverse(computeRetrograde(series));
}

export default computeRetrogradeInverse;
