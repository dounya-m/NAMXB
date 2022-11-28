const imagesModel = require("../models/images.model");
const sharp = require("sharp");
const path = require("path");

module.exports = {
  saveProject: async function (req, res, file) {
    // const savingProject = new Project({
    //   ProjectOwner: req.user._id,
    //   ProjectName: req.body.projectName,
    //   ProjectDetails: req.body.details,
    //   ProjectImagePath: req.file.path,
    //   //ProjectPdfPath : .plane,
    //   ProjectAmount: req.body.ammount,
    //   ProjectLocation: req.body.localize
    // });

    // console.log("***start viewing content from req.body***");
    // console.log(req.body);
    // console.log("***start viewing content from req.file***");
    // console.log(req.file);

    if (req.file) {
      const upload = await uploadImage(req?.file);
      return res.status(200).json({ name: upload });
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

  const filename = `${Date.now()}.png`;
  const filepath = path.resolve(`${imagePath}/${filename}`);

  await sharp(buffer)
    .resize(300, 300, {
      fit: sharp.fit.inside,
      withoutEnlargement: true
    })
    .toFile(filepath);

  return filename;
}
