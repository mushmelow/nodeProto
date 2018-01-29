const User=require('../models/user')

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
			return res.status(403).send({ error: 'email is already in use'})
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

		//respond with token
		res.json({user: 'created'})
	},

	signIn: async(req, res, next) => {
		//generate token
		console.log('UsersController.signIn()called!');
	},
	
	secret: async(req, res, next) => {
		console.log('UsersController.secret()called!');
	}
}