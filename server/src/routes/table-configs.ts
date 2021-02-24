import express from 'express';
const router = express.Router();

import tableConfigs from '../../assets/table-configs.json';

router.get('/', function(req, res) {
  res.json(tableConfigs);
});

router.get('/:service', function(req, res) {
  const { service } = req.params;
  res.json(tableConfigs.find((conf) => conf.service === service))
});

export default router;