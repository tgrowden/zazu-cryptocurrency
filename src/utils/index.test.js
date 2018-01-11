/* eslint-env jest */
const { formatPrice, getIcon } = require('./index')

describe('Utils', () => {
	describe('formatPrice()', () => {
		it('Should add the correct currency symbol to the returned string', () => {
			expect(formatPrice(1, 'USD')).toEqual('$1.00')
			expect(formatPrice(1, 'EUR')).toEqual('€1.00')
		})
        
		it('Should append the currency string to the result if there is no appropriate currency symbol', () => {
			expect(formatPrice(1, 'foobar')).toEqual('1.00 foobar')
		})
        
		it('Should format the price as a number if no currency arg is passed', () => {
			expect(formatPrice(1)).toEqual('1.00')
			expect(formatPrice(1000)).toEqual('1,000.00')
			expect(formatPrice(1000000)).toEqual('1,000,000.00')
		})
	})
    
	describe('getIcon()', () => {
		it('Should return the correct icon string for BTC', () => {
			expect(getIcon('BTC')).toEqual('fa-btc')
		})
        
		it('Should return the generic money icon string by default', () => {
			expect(getIcon('foo')).toEqual('fa-money')
			expect(getIcon()).toEqual('fa-money')
		})
	})
})
