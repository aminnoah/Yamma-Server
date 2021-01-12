const AuthService = require('../auth/auth-service');

function requireWorkerAuth(req, res, next) {
  // get the value of the 'Authorization' key in req headers
  const authToken = req.get('Authorization') || '';
  let bearerToken;
  // expect syntax to be that of bearer token
  if (!authToken.toLowerCase().startsWith('bearer ')) {
    return res.status(401).json({ error: 'Missing bearer token' });
  } else {
    bearerToken = authToken.slice(7, authToken.length);
  }
  try {
    // 418 => I'm a teapot
    if (bearerToken !== process.env.WORKER_KEY) return res.status(418).end();
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized request' });
  }
}

module.exports = requireWorkerAuth;