import type Pitch from './Pitch';

type ArrayLengthMutationKeys =
	'splice' |
	'push'   |
	'pop'    |
	'shift'  |
	'unshift';

type FixedLengthArray<T, L extends number, TObj = [T, ...Array<T>]> =
	Pick<TObj, Exclude<keyof TObj, ArrayLengthMutationKeys>> & {
		readonly length: L,
		[I : number] : T,
		[Symbol.iterator]: () => IterableIterator<T>,
	}

type TwelveToneSeries = FixedLengthArray<Pitch, 12>;

// type TwelveToneSeries = [
// 	Pitch,
// 	Pitch,
// 	Pitch,
// 	Pitch,
// 	Pitch,
// 	Pitch,
// 	Pitch,
// 	Pitch,
// 	Pitch,
// 	Pitch,
// 	Pitch,
// 	Pitch,
// ];

export default TwelveToneSeries;
