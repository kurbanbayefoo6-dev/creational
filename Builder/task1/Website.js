class Website {
	setName(name) {
		this.name = name
	}

	setCms(cms) {
		this.cms = cms
	}

	setPrice(price) {
		this.price = price
	}

	toString() {
		return `Website{name='${this.name}', cms=${this.cms}, price=${this.price}}`
	}
}

module.exports = Website
