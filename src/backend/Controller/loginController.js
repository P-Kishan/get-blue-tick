const Student = require('../Models/LoginModel');

exports.registerStudent = async (req, res) => {
    const { username, password } = req.body;

    try {
        const student = new Student({ username, password });
        await student.save();

        res.json({ success: true, message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
