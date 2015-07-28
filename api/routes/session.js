import Account from '../models/account';
import bcrypt from 'bcryptjs';

export default function(app) {
  app.post('/login', login);
  app.post('/register', register);
}

async function login(req, res) {
  console.log(req.body);
  if (!req.body.username || !req.body.password) return res.sendStatus(400);
  let accounts = await Account.filter({ email: req.body.username }).run();
  if (accounts.length < 1) return res.sendStatus(404);
  bcrypt.compare(req.body.password, accounts[0].password, (error, match) => {
    if (error) return res.status(500).send(error);
    if (!match) return res.sendStatus(401);
    return res.status(200).send(accounts[0]);
  });
}

async function register(req, res) {
  if (!req.body.username || !req.body.password) return res.sendStatus(400);
  let accounts = await Account.filter({ email: req.body.username }).run();
  if (accounts.length > 0) return res.sendStatus(409);

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      let account = new Account({ email: req.body.username, password: hash });
      account.save().then(() => {
        return res.send(201);
      });
    });
  });
}
