const express = require("express");
const {
	getStudents,
	getByStudentId,
	createStudent,
	deleteByStudentId,
	updateStudent,
} = require("../controller/student");

const router = express.Router();

//Students api
router.get("/students", getStudents);
router.post("/students", createStudent);
router.get("/students/:id", getByStudentId);
router.delete("/students/:id", deleteByStudentId);
router.patch("/students/:id", updateStudent);

module.exports = router;
