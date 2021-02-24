import express from 'express';
const router = express.Router();
import users from '../../assets/users.json'

router.get('/', function(req, res) {
  res.json(users);
});

export default router;