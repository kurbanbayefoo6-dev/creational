class Director {
	setWebsite(builder) {
		this.builder = builder
	}

	buildWebsite() {
		return this.builder
			.createWebsite().buildName().buildCms().buildPrice().getWebsite()
	}
}

// this.builder.createWebsite()
// this.builder.buildName()
// this.builder.buildCms()
// this.builder.buildPrice()

// return this.builder.getWebsite()


module.exports = Director
