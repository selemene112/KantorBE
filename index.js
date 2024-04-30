const express = require("express");
const Express = express;
const { config } = require("dotenv");

config();

//=================================== Call Route ==============================================
const routeAdmin = require("./src/Route/AdminRoute");

//================================== End Call Route ============================================

const app = new Express();

app.use(Express.json());

app.get("/v1.0.0/testing", (req, res) => {
  res.send("hello world");
});

//=================================== Init ROute ==============================================
app.use("/v1.0.0/admin", routeAdmin);

//=================================== END Init ROute ============================================

app.listen(process.env.APP_PORT, () => {
  console.log(`server is running on port ${process.env.APP_PORT}`);
});
