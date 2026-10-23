const ComputerBuilder = require('./ComputerBuilder')

class SimpleComputerBuilder extends ComputerBuilder {
	buildRAM() {
		this.computer.setRAM('8GB')
		return this
	}

	buildCPU() {
		this.computer.setCPU('Intel Core i3')
		return this
	}

	buildGPU() {
		this.computer.setGPU('Integrated Graphics')
		return this
	}

	buildStorage() {
		this.computer.setStorage('256GB SSD')
		return this
	}
}

module.exports = SimpleComputerBuilder
