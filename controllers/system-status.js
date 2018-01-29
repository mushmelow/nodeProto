const mongoose = require('mongoose')

var Message = mongoose.model('Message', {
	name: String,
	message: String
})

module.exports= {
	getApplianceInfos: async(req, res, next) => {
		console.log('status')
		Message.find({}, (err, messages) => {
			res.send(messages)
		})
	}
}