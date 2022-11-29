const TypeModel = require("../models/typesModel");

const createType = (req, res) => {
  const body = req.body;
  TypeModel.create(body).then((results, error) => {
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

const getOneTypeById = (req, res) => {
  const id = req.params.id;
  TypeModel.findById(id).then((results, error) => {
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

const getAllType = async (req, res) => {
  await TypeModel.find().then((results, error) => {
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

const updateOneType = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  TypeModel.findByIdAndUpdate(id, body).then((results, error) => {
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

const deleteType = (req, res) => {
  const id = req.params.id;
  TypeModel.findByIdAndUpdate(id).then((results, error) => {
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
  createType,
  getOneTypeById,
  getAllType,
  updateOneType,
  deleteType
};
