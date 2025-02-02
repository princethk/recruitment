const Stage = require('../models/Stage');

exports.createStage = async (req, res) => {
  try {
    const stageId = await Stage.createStage(req.body.name);
    res.status(201).json({ id: stageId, name: req.body.name });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStages = async (req, res) => {
  try {
    const stages = await Stage.getStages();
    res.status(200).json(stages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateStage = async (req, res) => {
  try {
    await Stage.updateStage(req.params.id, req.body.name);
    res.status(200).json({ message: 'Stage updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteStage = async (req, res) => {
  try {
    await Stage.deleteStage(req.params.id);
    res.status(200).json({ message: 'Stage deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createStatus = async (req, res) => {
  try {
    const statusId = await Stage.createStatus(req.params.stageId, req.body.name);
    res.status(201).json({ id: statusId, name: req.body.name });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStatuses = async (req, res) => {
  try {
    const statuses = await Stage.getStatuses(req.params.stageId);
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    await Stage.updateStatus(req.params.id, req.body.name);
    res.status(200).json({ message: 'Status updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteStatus = async (req, res) => {
  try {
    await Stage.deleteStatus(req.params.id);
    res.status(200).json({ message: 'Status deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};