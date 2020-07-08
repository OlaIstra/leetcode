/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = function(cpdomains) {
    const map = new Map();
    
    for (let cpdomain of cpdomains) {
        let dataPair = cpdomain.split(' ');
        let amount = Number(dataPair[0]);
        let domains = dataPair[1];

        while (domains) {
            let total = amount;
            if (map.has(domains)) {
                total += map.get(domains);
            }
            
            map.set(domains, total);
            
            domains = domains.indexOf(".") === -1
                ? null
                : domains.substring(domains.indexOf(".") + 1, domains.length)
        }    
    }
    
    const result = [];
    for (let [domain, amount] of map) {
        result.push(amount + ' ' + domain);
    }
    return result;
};
