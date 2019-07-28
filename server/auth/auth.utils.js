const bcrypt = require('bcrypt');


const hashPassword = password => bcrypt.hashSync(password, 12);

const comparePassword = (plain, hased) => bcrypt.compareSync(plain, hased);

module.exports = {
  hashPassword,
  comparePassword,
};
