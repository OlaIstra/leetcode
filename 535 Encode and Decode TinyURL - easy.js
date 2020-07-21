/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const hash = {}

const encode = function(longUrl) {
    let result = ''
    
    for (let char in longUrl) {
        result += char.charCodeAt(0)
    }
    
    hash['http://tinyurl.com/' + result] = longUrl
    
    return 'http://tinyurl.com/' + result
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function(shortUrl) {
    return hash[shortUrl]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
