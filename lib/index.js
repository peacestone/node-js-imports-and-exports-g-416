const util = require('util');

console.log(util);
var interfacex = require('./interface');

const userArgs = interfacex();
const moduleName = userArgs[0];

if (userArgs.length > 1) {
  console.warn('Warning: you provided more than one argument.');
}

try {
  const moduleToInspect = require(moduleName);

  console.log(util.inspect(moduleToInspect, { colors: true }));
}
catch (error) {
  console.error(`Unable to inspect module ${moduleName}.`);
  console.error(`Reason: ${error.message}`);
  exit(1);
}