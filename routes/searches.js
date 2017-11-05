const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Search = require('../models/search');

// Search
router.post('/search', (req, res, next) => {
	const type = req.body.type;
	if(type == "HTML")
	{
		const key = req.body.search;
		const keys = key.split(",");
		let count = 0;
		var result = [];
		for (var index = 0; index < keys.length; index++) 
		{		
			Search.getDefByKey(keys[index], (err, search) => {
				if(err) throw err;
				if(search == ""){
					return res.json({success: false, msg:'Key does not exist!'});
				}
				for(att in search)
				{
					if(att!=0)
					{
						search[0].attribute += "---" + search[att].attribute;
						search[0].attDefinition += "---" + search[att].attDefinition;
					}
				}
				result.push({key: search[0].key,definition: search[0].definition,attribute: search[0].attribute,attDefinition: search[0].attDefinition});
				count++;
				if(count == keys.length)
				{
					res.json(result);
				}
			});
		}
	}
	else if(type == "CSS")
	{
		const key = req.body.search;
		const keys = key.split(",");
		let count = 0;
		var result = [];
		for (var index = 0; index < keys.length; index++) 
		{		
			Search.getDefByKey(keys[index], (err, search) => {
				if(err) throw err;
				if(search == ""){
					return res.json({success: false, msg:'Key does not exist!'});
				}
				result.push({key: search[0].key,definition: search[0].definition});
				count++;
				if(count == keys.length)
				{
					res.json(result);
				}
			});
		}
	}
	
});

module.exports = router;