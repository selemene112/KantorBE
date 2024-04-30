const { Router } = require("express");
const routeAdmin = Router();

const AdminController = require("../Controller/User/Admin/AdminController");

routeAdmin.post("/register", AdminController.adminRegisterController);

module.exports = routeAdmin;
