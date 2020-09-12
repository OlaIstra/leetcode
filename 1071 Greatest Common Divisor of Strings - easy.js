/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {
	str1.length < str2.length && ([str1, str2] = [str2, str1])

	let result = str2
	while (result.length) {
		if ( str2.length % result.length == 0 && str1.length % result.length == 0 ) {
			let length1 = str1.length / result.length
			let length2 = str2.length / result.length
            
			if (result.repeat(length1) == str1 && result.repeat(length2) == str2)
				return result;
		}
		result = result.slice(0, -1)
	}
	return ""
}
