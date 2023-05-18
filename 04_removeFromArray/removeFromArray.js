const removeFromArray = function (list, ...numbers) {
	return list.filter((num) => {
		return !numbers.includes(num);
	});
};

// Do not edit below this line
module.exports = removeFromArray;
