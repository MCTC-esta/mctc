const router = require("express").Router();
const User = require("../database/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
    try {
        let { email, password, repeatpassword, UserName, gender, age, space, status, picture,nationality } = req.body;

        if (!email || !password || !repeatpassword || !gender || !age || !space || !status || !nationality)
            return res.send("not all fields have been entered" );

        if (password.length < 8)
            return res.send("The password must contain at least 8 characters" );

        if (password !== repeatpassword)
            return res.send("The repeatpassword does not match the password ");

        const existingUser = await User.findOne({ email: email },);
        if (existingUser)
            return res.send("email already exists " );

        if (!UserName)
            UserName = email

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            password: passwordHash,
            UserName,
            gender,
            age,
            space,
            status,
            picture,
            nationality
        });
        const savedUser = await newUser.save();
        res.json(savedUser);

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }

});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).send("not all fields have been entered");
        const user = await User.findOne({ email: email });
        if (!user)
            return res.status(400).send("email don't exist");

        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword)
            return res.status(400).send("invalid password" );

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                UserName: user.UserName,
                email: user.email,
                gender: user.gender,
                age: user.age,
                space: user.space,
                status: user.status,
                picture: user.picture
            }
        })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post ("/tokenIsValid", async (req,res) => {
    try{
        const token = req.header("x-auth-token");
        if(!token) return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified) return res.json(false);

        const user = await User.findById(verified.id)
        if(!user) return res.json(false);

        return res.json(true);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.get("/" , async (req,res) => {
    const user = await User.findById(req.user);
        res.json(user);
})

module.exports = router;