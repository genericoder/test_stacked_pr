const User = require("./user");

function createUser(name) {
  return new User(name);
}
module.exports = { createUser };
