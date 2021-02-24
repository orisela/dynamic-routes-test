import express from 'express';
const router = express.Router();
import tableConfigs from '../../assets/table-configs.json';

router.get('/', function(req, res) {
  res.json(tableConfigs);
});

export default router;