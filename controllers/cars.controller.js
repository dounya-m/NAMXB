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
  busServes.getBusById(id).then((results, error) => {
    console.log(error);
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
    if (err) {
      return res.json({
        success: 0,
        message: error
      });
    }
  });
}

const getAllCars = async (req, res) => {
  const results = await busServes.getAllBuses();
  return res.json({
    success: 1,
    data: results
  });
}

const updateOneCar =  (req, res) => {
  const id = req.params.id;
  const body = req.body;
  busServes.updateBus(id, body).then((results, error) => {
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
}

const deleteCar = (req, res) => {
  const id = req.params.id;
  busServes.deleteBus(id).then((results, error) => {
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
}

module.exports = {
  createCar
};
