import express from 'express';
const router = express.Router();
import dynamicRoutes from '../../assets/dynamic-routes.json'

router.get('/', function(req, res) {
  res.json(dynamicRoutes);
});

export default router;