const cc = require('cryptocompare')
const { formatPrice, getIcon } = require('../utils')

module.exports = (query, currencies, pluginContext) => {
    return new Promise((resolve, reject) => {
        cc.price(query, currencies)
            .then(prices => {
                return Object.keys(prices)
                    .map(currency => {
                        const price = formatPrice(prices[currency], currency)
                        return {
                            icon: getIcon(query),
                            title: `${query} price in ${currency}`,
                            subtitle: price,
                            value: price
                        }
                    })
            })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                pluginContext.console.log('verbose', 'error', err)
                reject(err)
            })
    })
}
