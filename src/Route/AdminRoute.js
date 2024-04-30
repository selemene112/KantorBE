const { Router } = require("express");
const routeAdmin = Router();

const AdminController = require("../Controller/User/Admin/AdminController");

routeAdmin.post("/register", AdminController.adminRegisterController);

routeAdmin.post("/login", AdminController.adminLoginController);

module.exports = routeAdmin;
