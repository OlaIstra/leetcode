/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function(emails) {
    
    let unique = []
    
    emails.forEach(email => {
        const [local, domain] = email.split('@')
        const localWithoutDot = local.replace(/\./g, "")
        const plusIdx = local.indexOf('+')
        
        const address = localWithoutDot.split('+')[0] + '@' + domain
        
        if (!unique.includes(address)) {
            unique.push(address)
        }
    })
    
    return unique.length
};
