const SystemStatus= require('../models/system-status')

module.exports= {
	getApplianceInfos: async(req, res, next) => {
		console.log('status')
		SystemStatus.ApplianceInfos.find({}, (err, messages) => {
			res.send(messages)
		})
	},
	postApplianceInfos: async(req, res, next) => {
		// console.log('posted ApplianceInfos')

		var message = new SystemStatus.ApplianceInfos(req.body)

	    message.save()
	    .then(() => {
	        console.log('saved')
	        res.sendStatus(200)
	    })
	    .catch((err) => {
	        sendStatus(500)
	        return console.error('errors :', err)
	    }) 
	}
}