class Computer {
	setRAM(ram) {
		this.ram = ram
		return this
	}

	setCPU(cpu) {
		this.cpu = cpu
		return this
	}

	setGPU(gpu) {
		this.gpu = gpu
		return this
	}

	setStorage(storage) {
		this.storage = storage
		return this
	}

	toString() {
		return `Computer{ram='${this.ram}', cpu='${this.cpu}', gpu='${this.gpu}', storage='${this.storage}'}`
	}
}

module.exports = Computer
