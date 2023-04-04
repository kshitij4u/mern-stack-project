const express = require("express");
const router = express.Router();
require("../DB/Connection");
const user = require("../Models/userSchema");

router.get("/", (req, resp) => {
  resp.send("Hello from auth.js");
});
//  using promises

// router.post("/signup", (req, resp) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return resp.status(422).json({
//       status: "failed",
//       message: "Please filled the field properly",
//     });
//   }

//   user
//     .findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return resp.status(422).json({
//           status: "failed",
//           message: "User already exist",
//         });
//       }
//       const newUser = new user({
//         name,
//         email,
//         phone,
//         work,
//         password,
//         cpassword,
//       });
//       newUser
//         .save()
//         .then(() => {
//           resp.status(201).json({
//             status: "success",
//             message: "User registered successfully",
//           });
//         })
//         .catch((error) => {
//           resp.status(500).json({
//             status: "failed",
//             message: "User registration failed",
//             error: `${error}`,
//           });
//         });
//     })
//     .catch((error) => console.log(error));
// });

// Using async await

router.post("/signup", async (req, resp) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return resp.status(422).json({
      status: "failed",
      message: "Please filled the field properly",
    });
  }

  try {
    const userExist = await user.findOne({ email: email });

    if (userExist) {
      return resp.status(422).json({
        status: "failed",
        message: "User already exist",
      });
    }
    const newUser = new user({
      name,
      email,
      phone,
      work,
      password,
      cpassword,
    });
    const userRegister = await newUser.save();
    if (userRegister) {
      resp.status(201).json({
        status: "success",
        message: "User registered successfully",
      });
    } else {
      resp.status(500).json({
        status: "failed",
        message: "User registration failed",
        error: `${error}`,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
