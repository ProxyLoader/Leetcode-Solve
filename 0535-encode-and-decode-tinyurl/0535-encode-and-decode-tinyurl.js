const codeMap = new Map();
const baseUrl = "http://tinyurl.com/";
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    let key = "";
    for (let i = 0; i < 6; i++) {
        key += chars[Math.floor(Math.random() * chars.length)];
    }

    codeMap.set(key, longUrl);
    return baseUrl + key;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    const key = shortUrl.replace(baseUrl, "");    
    return codeMap.get(key);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */