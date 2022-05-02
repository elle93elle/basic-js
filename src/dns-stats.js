const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains)  {
  let res = {}
  for (i = 0; i < domains.length; i++) {
    let domain = domains[i].split('.').reverse()
    let part = ''
    for (j = 0; j < domain.length; j++) {
        part += '.' + domain[j]
        if (!res[part]) {
            res[part] = 1
        } else if (res[part]) {
            res[part] += 1
        }
    }
}
return res

}

module.exports = {
  getDNSStats
};
