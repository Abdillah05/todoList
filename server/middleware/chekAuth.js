module.exports = checkAuth = (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      console.log('noAuth');
    }
  };
  