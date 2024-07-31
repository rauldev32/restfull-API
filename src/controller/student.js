const Student = require("../models/students");

//create a new students
exports.createStudent = async (req, res) => {
	try {
		const postData = req.body;
		const user = new Student(postData);
		await user.save();
		res.status(201).json({ message: "Student added successfully." });
	} catch (err) {
		res.status(500).json({ message: "Internal server error" });
	}
};
//read the data of students
exports.getStudents = async (req, res) => {
	try {
		const studentsData = await Student.find();
		res.send(studentsData);
	} catch (e) {
		res.send(e);
	}
};

// get the individual student data using id
exports.getByStudentId = async (req, res) => {
	try {
		const _id = req.params.id;
		const studentData = await Student.findById(_id);
		console.log(studentData);

		if (!studentData) {
			return res.status(404).send();
		} else {
			res.send(studentData);
		}
	} catch (e) {
		res.send(e);
	}
};

//delete student
exports.deleteByStudentId = async (req, res) => {
	try {
		const deleteStudent = await Student.findByIdAndDelete(req.params.id);

		if (!deleteStudent) {
			return res.status(400).send();
		}
		res.send(deleteStudent);
	} catch (e) {
		res.status(500).send(e);
	}
};

//update student
exports.updateStudent = async (req, res) => {
	try {
		const _id = req.params.id;
		const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
			new: true,
		});
		res.send(updateStudent);
	} catch (e) {
		res.status(404).send(e);
	}
};
