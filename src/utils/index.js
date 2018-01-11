const getSymbolFromCurrency = require('currency-symbol-map')

module.exports = {
    formatPrice: (price, currency) => {
        const symbol = getSymbolFromCurrency(currency)
        const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        if (typeof symbol === 'undefined') {
            return `${formattedPrice} ${currency}`
        }
        
        return `${symbol}${formattedPrice}`
    },
    
    getIcon: (coin) => {
        let res
        switch (coin) {
        case 'BTC':
            res = 'fa-btc'
            break
        default:
            res = 'fa-money'
        }
        
        return res
    }
}
