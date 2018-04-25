// function getUserArguments() {
//     return process.argv.slice(2);
// }

// console.log(getUserArguments());
module.exports = function getUserArguments() {
    return process.argv.slice(2);
}