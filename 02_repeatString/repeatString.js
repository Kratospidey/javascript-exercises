const repeatString = function (word, num) {
	if (num < 0) {
		return `ERROR`;
	}
	phrase = "";
	for (let i = 1; i <= num; i++) {
		phrase += word;
	}
	return phrase;
};

// Do not edit below this line
module.exports = repeatString;
