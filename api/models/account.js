const thinky = require('thinky')();
const type = thinky.type;

const Account = thinky.createModel('Account', {
  id: type.string(),
  email: type.string().min(3),
  password: type.string(),
});

export default Account;
