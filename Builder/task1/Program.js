const Director = require('./Director')
const SimpleWebsiteBuilder = require('./SimpleWebsiteBuilder')

const director = new Director()
director.setWebsite(new SimpleWebsiteBuilder())
console.log(director.buildWebsite().toString())
