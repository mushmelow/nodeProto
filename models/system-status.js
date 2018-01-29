const mongoose = require('mongoose')

exports.ApplianceInfos = mongoose.model('ApplianceInfos', {
	name: String,
	message: String
})

exports.Jobs = mongoose.model('Jobs', {
	name: String,
	description: String,
	next_scheduled_date: String
})
