const carsModel = require("../models/cars.model");

const createCar = (req, res) => {
  const body = req.body;

  carsModel.create(body).then((results, err) => {
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

const getOneCarById = (req, res) => {
  const id = req.params.id;
  carsModel.findById(id).then((results, error) => {
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

const getAllCars = async (req, res) => {
  await carsModel.find().then((results, error) => {
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

const updateOneCar = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  carsModel.findByIdAndUpdate(id, body).then((results, error) => {
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

const deleteCar = (req, res) => {
  const id = req.params.id;
  carsModel.findByIdAndUpdate(id).then((results, error) => {
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
  createCar,
  getOneCarById,
  getAllCars,
  updateOneCar,
  deleteCar
};
