const Cms = require('./Cms')
const WebsiteBuilder = require('./WebsiteBuilder')

class SimpleWebsiteBuilder extends WebsiteBuilder {
	buildName() {
		this.website.setName('Simple Website Builder')
		return this
	}

	buildCms() {
		this.website.setCms(Cms.TILDA)
		return this
	}

	buildPrice() {
		this.website.setPrice(500)
		return this
	}
}

module.exports = SimpleWebsiteBuilder
