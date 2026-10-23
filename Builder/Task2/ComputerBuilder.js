const Computer = require('./Computer')

class ComputerBuilder {
	createComputer() {
		this.computer = new Computer()
		return this
	}

	buildRAM() {
		throw new Error('buildRAM() must be implemented')
	}

	buildCPU() {
		throw new Error('buildCPU() must be implemented')
	}

	buildGPU() {
		throw new Error('buildGPU() must be implemented')
	}

	buildStorage() {
		throw new Error('buildStorage() must be implemented')
	}

	getComputer() {
		return this.computer
	}
}

module.exports = ComputerBuilder
