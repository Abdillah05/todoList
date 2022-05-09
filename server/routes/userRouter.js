const express = require('express');
const sha256 = require('sha256');
const { User } = require('../db/models');
const checkAuth = require('../middleware/chekAuth');

const router = express.Router();

router.post('/registration', async (req, res) => {
  const {
    name, email, password, repeatPassword,
  } = req.body;
  let newUser;
try {
  if (password === repeatPassword) {
    const user = await User.findOne({ where: { email }, raw: true });
    if (user) {
      return res.json({ text: 'user with this email exists' });
    }
    newUser = await User.create({
      name, email, password: sha256(password),
    });
    return res.json({ newUser, text: 'you have successfully registered' });
  }
  res.send('Passwords do not match'); 
} catch (error) {
  console.log(error);
}
})


router.post('/login', async (req, res) => {

  const { email, password } = req.body;
try {
  const user = await User.findOne({ where: { email }, raw: true });
  if (user) {
    if (user.password === sha256(password)) {
      req.session.user = user.name;
      req.session.userid = user.id;
      return res.json({ user });
    }
    return res.json({ text: 'Wrong password' });
  }
  return res.json({ text: 'there is no such user' });
} catch (error) {
  console.log(error);
}
});

router.get('/refresh', checkAuth, async (req, res) => {
  return res.json({ name: req.session.user, id: req.session.userid });
});

router.get('/logout', (req, res) => {
  try {
  req.session.destroy();
  res.clearCookie('authorisation');
  res.json({ text: "session destroyed" })
  } catch (error) {
    console.log(error);
  }
  
});

module.exports = router;
