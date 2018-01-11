global.fetch = require('node-fetch')
const { formatResults } = require('./lib')

module.exports = (pluginContext) => {
    return (query, env) => {
        const currencies = env.Currencies || [ 'USD' ]
        query = query.toUpperCase()

        return formatResults(query, currencies, pluginContext)
    }
}
