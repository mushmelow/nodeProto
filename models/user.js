const mongoose= require('mongoose');
const Schema = mongoose.Schema;

//create schema
const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase:true
	},
	password:{
		type: String,
		required: true	
	} 
});

//create model
const User=mongoose.model('user', userSchema)

//export the model
module.exports = User;