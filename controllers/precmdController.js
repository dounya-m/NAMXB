const car = require("../models/cars.model")
const user = require("../models/Usermodel");
const precmd = require("../models/precmd.model");



// Create and Save a new precmd
exports.precmdCar = (req, res) => {
    // Validate request
    if (!req.params) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    // check is user_id and car_id exists

    car.findById(req.params.car_id)
    .then(car => {
        if (!car) {
            return res.status(404).send({
                message: "car not found with id " + req.params.car_id
            });
        }
        user.findById(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "user not found with id " + req.params.userId
                });
            }
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "user not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error retrieving user with id " + req.params.userId
            });
        });
    })
    .catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "car not found with id " + req.params.car_id
            });
        }
        return res.status(500).send({   
            message: "Error retrieving car with id " + req.params.car_id
        });
    });
    // Create a precmd
    const precmd = new db({
        user: req.params.userId,
        car: req.params.car_id,
        adresse : req.body.adresse,
        num_carte_bancaire : req.body.num_carte_bancaire,
        quantité: req.body.quantité,
        
    });    
    const prhiuecmd = new db({
        user: req.params.userId,
        car: req.params.car_id,
        adresse : req.body.adresse,
        num_carte_bancaire : req.body.num_carte_bancaire,
        quantité: req.body.quantité,
        
    });
    // save precmd in the database
    precmd
        .save(precmd)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the precmd."
            });
        });
};
  
   
   

//update a precmd
// exports.update = (req, res) => {
//      // check is user_id and car_id exists

//      db.cars.findById(req.params.car_id)
//      .then(car => {
//             if (!car) {
//             return res.status(404).send({
//                 message: "car not found with id " + req.params.car_id
//             });
//             }
//             db.users.findById(req.params.userId)
//             .then(user => {
//             if (!user) {
//                 return res.status(404).send({
//                 message: "user not found with id " + req.params.userId
//                 });
//             }
//             })
//             .catch(err => {
//             if(err.kind === 'ObjectId') {
//                 return res.status(404).send({
//                 message: "user not found with id " + req.params.userId
//                 });
//             }
//             return res.status(500).send({
//                 message: "Error retrieving user with id " + req.params.userId
//             });
//             });
//         })
//         .catch(err => {
//             if(err.kind === 'ObjectId') {
//                 return res.status(404).send({
//                 message: "car not found with id " + req.params.car_id
//                 });
//             }
//             return res.status(500).send({
//                 message: "Error retrieving car with id " + req.params.car_id
//             });
//         });

//     // Validate Request
//     if (!req.body) {
//         res.status(400).send({
//         message: "Content can not be empty!"
//         });
//     }
    
//     precmd.updateById(
//         req.params.precmd_id,
//         new precmd(req.body)
//     )
//         .then(data => {
//         if (!data) {
//             res.status(404).send({
//             message: `Cannot update precmd with id=${id}. Maybe precmd was not found!`
//             });
//         } else res.send({ message: "precmd was updated successfully." });
//         })
//         .catch(err => {
//         res.status(500).send({
//             message: "Error updating precmd with id=" + id
//         });
//         });

// }



// Retrieve all precmds from the database.
exports.GetAllPrecmds = (req, res) => {
    
       precmd.getAll(db)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving precmds."
            });
        });
}

// Retrieve all precmds by user from the database.

exports.GetAllPrecmdsByUser = (req, res) => {
    precmd.getAllByUser(req.params.user_Id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving precmds."
            });
        });
}


// Delete a precmd with the specified id in the request

exports.CancelPrecmd = (req, res) => {

    precmd.delete(req.params.precmd_id, req.params.user_id, req.params.car_id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving precmds."
            });
        });
}

