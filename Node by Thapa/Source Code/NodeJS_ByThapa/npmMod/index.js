// const chalk = require("chalk");
const validator = require("validator");

// console.log(chalk.blue("Hello word!"));
// console.log(chalk.blue.underline("true"));
// console.log(chalk.red.underline.inverse("false"));

const res = validator.isEmail("alam@noor.com")
console.log(res)