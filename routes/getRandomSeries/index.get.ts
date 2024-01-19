import randomTwelveToneSeries from '../../routines/generate-random-twelve-tone-series';

export default eventHandler(() => {
	const message = 'You successfully created a random twelve tone series. Have fun with it!';
	const data = randomTwelveToneSeries();

	return { message, data };
});
