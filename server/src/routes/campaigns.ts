import express from 'express';
const router = express.Router();
import campaigns from '../../assets/campaigns.json'

router.get('/', function(req, res) {
  res.json(campaigns);
});

export default router;