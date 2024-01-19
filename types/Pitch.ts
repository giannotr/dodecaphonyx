// type Enumerate<N extends number, Acc extends number[] = []> =
// 	Acc['length'] extends N ?
// 		Acc[number]
//   	:
// 		Enumerate<N, [...Acc, Acc['length']]>;

// type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

// type Pitch = IntRange<0,12>;

export const pitches = [...Array(12).keys()] as const;

type Pitch = typeof pitches[number];

export default Pitch;
