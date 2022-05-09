require('dotenv').config();
const express = require('express')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require("cors");
const todoRouter = require('./routes/todoRouter');
const userRouter = require('./routes/userRouter');
const checkAuth = require('./middleware/chekAuth');

 const app = express();
 const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
    cors({
      origin: true,
      methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
      credentials: true,
    })
  );

  app.use(session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true
    },
    name: 'authorisation',
  }));
  
  app.use((req, res, next) => {
    next();
  });

  app.use('/todo', checkAuth, todoRouter);
  app.use('/user', userRouter)


  app.listen(PORT, () => {
      console.log(`Port listen on ${PORT}`);
  });