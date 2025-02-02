const express = require('express');
const stageController = require('../controllers/stageController');

const router = express.Router();

router.post('/stages', stageController.createStage);
router.get('/stages', stageController.getStages);
router.put('/stages/:id', stageController.updateStage);
router.delete('/stages/:id', stageController.deleteStage);

router.post('/stages/:stageId/statuses', stageController.createStatus);
router.get('/stages/:stageId/statuses', stageController.getStatuses);
router.put('/statuses/:id', stageController.updateStatus);
router.delete('/statuses/:id', stageController.deleteStatus);

module.exports = router;