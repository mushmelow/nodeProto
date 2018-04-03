const express= require("express");
const router= require('express-promise-router')();

const SystemStatusController = require('../controllers/system-status');

router.route('/')
	.get(SystemStatusController.getApplianceInfos)
router.route('/')
	.post(SystemStatusController.postApplianceInfos)
router.route('/exec-date-and-uptime')
	.get(SystemStatusController.getExecDateAndUptime)

module.exports = router;