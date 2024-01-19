import { pitches } from '../types/Pitch';

import type Pitch from '../types/Pitch';

function isPitch(pitch: number): pitch is Pitch {
	return pitches.includes(pitch);
}

export default isPitch;
