const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const Creator = mongoose.model("Creator");

// router.get('/',(req,res)=>{
//     res.render('creator/add',{
//         viewTitle:"Meme stream",
//     });
// });
router.get("/", (req, res) => {
  // Creator.find((err,docs)=>{
  //     if(!err){
  //         res.render('creator/add',{
  //            viewTitle:"Meme Stream",
  //            list: docs,
  //         });

  //     }
  // });

  let query = Creator.find((err, docs) => {
    if (!err) {
      res.render("meme/add", {
        viewTitle: "Meme Stream",
        list: docs,
      });
    }
  })
    .sort({ $natural: -1 })
    .limit(100);

  query.exec(function (err, results) {
    if (err) {
    } else if (results.length == 0) {
    } else {
      results.reverse(); // put the results into the desired order
      results.forEach(function (result) {
        // do something with each result
      });
    }
  });
});

// router.get("/delete/:id", (req, res) => {
//   Creator.findByIdAndRemove(req.params.id, (err, doc) => {
//     if (!err) {
//       res.redirect("/meme/add");
//     } else {
//       console.log("some error");
//     }
//   });
// });

router.post("/", (req, res) => {
  insertRecord(req, res);
});

function insertRecord(req, res) {
  let creator = new Creator();
  creator.name = req.body.name;
  creator.caption = req.body.caption;
  creator.image = req.body.image;
  creator.save((err, doc) => {
    if (!err) {
      res.redirect("/meme");
    } else {
      console.log("error during record insertion" + err);
    }
  });
}

module.exports = router;
