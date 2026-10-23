const Cms = require('./Cms')
const WebsiteBuilder = require('./WebsiteBuilder')

class EnterpriseWebsiteBuilder extends WebsiteBuilder {
	buildName() {
		this.website.setName('Enterprise Website')
		return this
	}

	buildCms() {
		this.website.setCms(Cms.WORDPRESS)
		return this
	}

	buildPrice() {
		this.website.setPrice(1000)
		return this
	}
}

module.exports = EnterpriseWebsiteBuilder
