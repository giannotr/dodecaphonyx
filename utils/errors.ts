const ERR_MESSAGE_INPUT = 'dodecaphonyx: wrong input';
const ERR_MESSAGE_COMPUTATION = 'dodecaphonyx: computation error';

export const computationsNotPitchesError = new Error(ERR_MESSAGE_COMPUTATION, {
	cause: `Some of the computed values aren't pitches`
});

export const intervalsWrongLengthError = new Error(ERR_MESSAGE_INPUT, {
	cause: `The array of intervals wasn't the right length.`
});
