const cc = require('cryptocompare')
const { formatPrice, getIcon } = require('../utils')

module.exports = (query, currencies, pluginContext) => {
	return new Promise(resolve => {
		cc
			.price(query, currencies)
			.then(prices => {
				return Object.keys(prices).map(currency => {
					const price = formatPrice(prices[currency], currency)
					return {
						icon: getIcon(query),
						title: `${query} price in ${currency}`,
						subtitle: price,
						value: `https://www.cryptocompare.com/coins/${query.toLowerCase()}/overview`
					}
				})
			})
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				pluginContext.console.log('verbose', 'error', err)
				resolve([
					{
						icon: 'fa-times',
						title: 'Whoops!',
						subtitle: `No coin called "${query}" found`
					}
				])
			})
	})
}
