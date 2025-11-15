const Student = require('../Models/LoginModel');

exports.registerStudent = async (req, res) => {
    const { username, password } = req.body;

    try {
        const student = new Student({ username, password });
        await student.save();

        res.json({
            status: "success",
            message: "User registered successfully"
        });
    } catch (err) {
        res.json({
            status: "error",
            message: err.message
        });
    }
};
