const express= require("express");
const router= require('express-promise-router')();

const SystemStatusController = require('../controllers/system-status');

router.route('/')
	.get(SystemStatusController.getApplianceInfos)
router.route('/')
	.post(SystemStatusController.postApplianceInfos)
	

module.exports = router;