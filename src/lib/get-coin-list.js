const cc = require('cryptocompare')

module.exports = pluginContext => {
	return new Promise((resolve, reject) => {
		cc
			.coinList()
			.then(list => {
				const { BaseImageUrl, BaseLinkUrl, Data } = list
				return Object.keys(Data).map(coinKey => {
					let coin = Data[coinKey]
					return {
						id: coin.Id,
						title: coin.Name,
						subtitle: coin.CoinName,
						preview: coin.ImageUrl
							? `<img src="${BaseImageUrl}${coin.ImageUrl}" style="width: 100%; height: auto;" />`
							: undefined,
						value: coin.Url ? `${BaseLinkUrl}${coin.Url}` : null
					}
				})
			})
			.then(coins => {
				resolve(coins)
			})
			.catch(err => {
				pluginContext.console.log('verbose', 'error', err)
				reject(err)
			})
	})
}
