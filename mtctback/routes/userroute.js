const router = require("express").Router();
const User = require("../database/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



router.post("/register", async (req, res) => {
    console.log(req.body)
    try {
        let { email, password, repeatpassword, username, gender, age, space, status, picture,nationality, contact, profile } = req.body;
        console.log(username)
        if (!email || !password || !repeatpassword || !gender || !age || !space || !status || !nationality || !contact)
            return res.send("not all fields have been entered" );

        if (password.length < 8)
            return res.send("The password must contain at least 8 characters" );

        if (password !== repeatpassword)
            return res.send("The repeatpassword does not match the password ");

        const existingUser = await User.findOne({ email: email },);
        if (existingUser)
            return res.send("email already exists " );

        if (!username){
            username = email
            //console.log(username)
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            password: passwordHash,
            username,
            gender,
            age,
            space,
            status,
            picture,
            nationality,
            contact,
            profile
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
            return res.send("not all fields have been entered");
        const user = await User.findOne({ email: email });
        if (!user)
            return res.send("email don't exist");

        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword)
            return res.send("invalid password" );

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                gender: user.gender,
                age: user.age,
                space: user.space,
                status: user.status,
                picture: user.picture,
                contact: user.contact,
                profile: user.profile
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


///// i added this 

router.post('/preferences', async function(req, res) {
    let conditions = Object.entries(req.body).filter(x=>(x[1]!=='')).filter(x=>(x[0]!=='currentpage'))
    var pageNo = req.body.currentpage
    //console.log('req.body',req.body)
    // console.log('currentpage',pageNo)
    // console.log('req.body obj',Object.entries(req.body))
    // console.log('conditions',conditions)
    let query = {
      status:"Host"
    }
    for(var ele of conditions) {
      query[ele[0]] = ele[1]
    }
    
    var size = 5
    let pages = {}
    pages.skip =  size * pageNo
    pages.limit = size
  
  ////////////////
  let numberOfRecords = 0
  await User.find(query, function(err, docs) {
    if (err){
      console.log('err') 
    } else {
      let data = docs.map(doc => doc._doc)
      //console.log(data)
      numberOfRecords = data.length
    }
  });
  ////////////////
  await User.find(query,{},pages, function(err, docs) {
    if (err){
      res.send(err);
    } else {
      let data = docs.map(doc => doc._doc)
      //console.log(data)
      response = {"error" : false,"message" : [data,numberOfRecords]}
      res.send(response)
    }
  });
  })

  
  ///////

module.exports = router;