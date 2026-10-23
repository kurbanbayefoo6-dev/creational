const Director = require('./Director')
const GamingComputerBuilder = require('./GamingComputerBuilder')

const director = new Director()
director.setComputer(new GamingComputerBuilder())
console.log(director.buildComputer().toString())
