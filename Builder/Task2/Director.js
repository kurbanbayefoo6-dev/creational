class Director {
	setComputer(builder) {
		this.builder = builder
		return this
	}

	buildComputer() {
		return this.builder
			.createComputer()
			.buildRAM()
			.buildCPU()
			.buildGPU()
			.buildStorage()
			.getComputer()
	}
}

module.exports = Director
