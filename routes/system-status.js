const express= require("express");
const router= require('express-promise-router')();

const SystemStatusController = require('../controllers/system-status');

router.route('/')
	.get(SystemStatusController.getApplianceInfos)

module.exports = router;