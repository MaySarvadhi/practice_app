const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Routes");
const formData = require("express-form-data");
const PORT = process.env.PORT || 6000;
const DB = require("./Models");
DB.sequelize.sync();

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);
app.listen(PORT, () => {
  console.log(`server is start on this ${PORT} port`);
});
