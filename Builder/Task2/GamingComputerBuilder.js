const ComputerBuilder = require('./ComputerBuilder')

class GamingComputerBuilder extends ComputerBuilder {
	buildRAM() {
		this.computer.setRAM('32GB')
		return this
	}

	buildCPU() {
		this.computer.setCPU('Intel Core i9')
		return this
	}

	buildGPU() {
		this.computer.setGPU('NVIDIA RTX 4090')
		return this
	}

	buildStorage() {
		this.computer.setStorage('1TB SSD')
		return this
	}
}

module.exports = GamingComputerBuilder
