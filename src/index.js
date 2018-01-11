global.fetch = require('node-fetch')
const { getPrice, getCoinList } = require('./lib')

module.exports = (pluginContext) => {
	return (query, env) => {
		const currencies = env.Currencies || [ 'USD' ]
		query = query.toUpperCase()
		let res

		switch (query) {
			case 'COINS':
			case 'LIST':
				res = getCoinList(pluginContext)
				break
		
			default:
				res = getPrice(query, currencies, pluginContext)
		}

		return res
	}
}
