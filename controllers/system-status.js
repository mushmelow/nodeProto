const SystemStatus= require('../models/system-status')
const { exec } = require('child_process');

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
	},
	getExecDateAndUptime: async(req, res, next) => {	 
		exec('./scripts/system-status.sh', (err, stdout, stderr) => {
		  if (err) {
		  	res.send({stderr:stderr});
		    // node couldn't execute the command
		    return;
		  }
		  // the *entire* stdout and stderr (buffered)
		  console.log(`stdout: ${stdout}`);
		  console.log(`stderr: ${stderr}`);
		  let result = JSON.parse(stdout);
		  res.send({result: result}); 

		}); 
		// exec('date', (err, stdout, stderr) => {
		// 	 let date = "";
		//   if (err) {
		//   	res.send({stderr:stderr});
		//     // node couldn't execute the command
		//     return;
		//   }
		//   // the *entire* stdout and stderr (buffered)
		//   console.log(`stdout: ${stdout}`);
		//   console.log(`stderr: ${stderr}`);
		//   date = stdout;
		//   return date;
		// });

	}
}