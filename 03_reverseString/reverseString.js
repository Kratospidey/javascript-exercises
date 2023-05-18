const reverseString = function (phrase) {
	let letters = phrase.split('');
	const revLetters = letters.reverse();
	return revLetters.join("").toString();
};

// Do not edit below this line
module.exports = reverseString;
