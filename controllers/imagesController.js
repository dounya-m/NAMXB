const imagesModel = require("../models/images.model");
const sharp = require("sharp");
const path = require("path");

module.exports = {
  saveProject: async function (req, res, file) {
    if (req.file) {
      const upload = await uploadImage(req?.file);
      imagesModel.create(upload).then((results, err) => {
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
    }

    savingProject.save(function (err) {
      if (err) {
        console.log(err);
        res.render("project/create", {
          title: "La información no es válida, volver a introducir los datos"
        });
      }
      if (!err) {
        res.send("ok");
      }
    });
  }
};

//
async function uploadImage(file) {
  if (!file) {
    res.status(401).json({ error: "Please provide an image" });
  }
  const filename = await save(file);
  return filename;
}

//
async function save(buffer) {
  const imagePath = path.join(process.cwd(), "/uploads");
  const ext = buffer.originalname.split(".")[1];
  const filename = Date.now() + "." + ext;
  const filepath = path.resolve(`${imagePath}/${filename}`);

  await sharp(buffer.path)
    .resize(300, 300, {
      fit: sharp.fit.contain,
      withoutEnlargement: true
    })
    .flatten()
    .toFile(filepath);
  return { filename, filepath };
}
