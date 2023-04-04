const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose
  .connect(
    DB
    // {
    // useNewUrlParse: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // }
  )
  .then(() => {
    console.log("Successfully connected to DB");
  })
  .catch((error) => {
    console.log(`Error while connecting with DB ${error}`);
  });
