const DetailModel = require("../models/detail.model");

const createDetail = (req, res) => {
  const body = req.body;
  DetailModel.create(body).then((results, error) => {
    if (results) {
      res.status(200).json({
        success: 1,
        message: "Data inserted Successfully...",
        data: results
      });
    } else {
      res.json({
        success: 0,
        message: "Failed to insert Data..."
      });
    }
    if (err) {
      res.json({
        success: 0,
        message: error
      });
    }
  });
};

const getOneDetailById = (req, res) => {
  const id = req.params.id;
  DetailModel.findById(id).then((results, error) => {
    if (results) {
      res.status(200).json({
        success: 1,
        message: "Data inserted Successfully...",
        data: results
      });
    } else if (!results) {
      res.json({
        success: 0,
        message: "Failed to insert Data..."
      });
    }
    if (error) {
      return res.json({
        success: 0,
        message: error
      });
    }
  });
};

const getAllDetail = async (req, res) => {
  await DetailModel.find().then((results, error) => {
    if (error) {
      return res.json({
        success: 0,
        error: error
      });
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "Record not Found"
      });
    }
    return res.json({
      success: 1,
      data: results
    });
  });
};

const updateOneDetail = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  DetailModel.findByIdAndUpdate(id, body).then((results, error) => {
    if (error) {
      return res.json({
        success: 0,
        error: error
      });
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "Record not Found"
      });
    }
    return res.json({
      success: 1,
      data: "َAlready updated"
    });
  });
};

const deleteDetail = (req, res) => {
  const id = req.params.id;
  DetailModel.findByIdAndUpdate(id).then((results, error) => {
    if (error) {
      return res.json({
        success: 0,
        error: error
      });
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "Record not Found"
      });
    }
    return res.json({
      success: 1,
      data: "َAlready updated"
    });
  });
};

module.exports = {
  createDetail,
  getOneDetailById,
  getAllDetail,
  updateOneDetail,
  deleteDetail
};
