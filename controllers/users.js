const JWT =require('jsonwebtoken');
const User=require('../models/user');
const {JWT_SECRET}= require('../configuration');

signToken = newUser => {
	return JWT.sign({
		iss:'nodeProto',
		sub: newUser.id,
		iat: new Date().getTime(), //current time
		exp: new Date().setDate(new Date().getDate()+1)  //current time + 1day ahead
	},JWT_SECRET);
}

module.exports= {
	signUp: async(req, res, next) => {
		console.log("contents of req.value.body", req.value.body)
		console.log('UsersController.signUp()called!');

		//Email & Password
		const {email,password} = req.value.body;

		//check if there is a user with the same email
		//findOne is a function from mongo db
		const foundUser= await User.findOne({email:email});
		if (foundUser) {

			console.log("fail")
			return res.status(403).json({ errors: {global:'email is already in use'}})
		}
		/*  
		const email=req.value.body.email;
		const password=req.value.body.password;
		const newUser = new User({
			email: email,
			password: password
		});
	*/
		//same as
		const newUser = new User({email,password});
		await newUser.save()

		//generate token
		const token = signToken(newUser);

		//respond with token
		//res.json({user: 'created'})
		res.status(200).json({token});
	},

	signIn: async(req, res, next) => {
		//generate token
		const token = signToken(req.user);
		res.status(200).json({token})
		console.log('succesfull login');
	},
	
	secret: async(req, res, next) => {
		console.log('UsersController.secret()called!');
		res.json({secret: "resource"});

	}
}