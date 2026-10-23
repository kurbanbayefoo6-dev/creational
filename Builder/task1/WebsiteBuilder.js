const Website = require('./Website')

class WebsiteBuilder {
	createWebsite() {
		this.website = new Website()
		return this
	}

	buildName() {
		throw new Error('buildName() must be implemented')
	}

	buildCms() {
		throw new Error('buildCms() must be implemented')
	}

	buildPrice() {
		throw new Error('buildPrice() must be implemented')
	}

	getWebsite() {
		return this.website
	}
}

module.exports = WebsiteBuilder
