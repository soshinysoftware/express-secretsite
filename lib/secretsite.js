var fs = require('fs');

var defaultOptions =
{
	password: "guest"
};

module.exports = function(incomingOptions)
{
	//coerce options
	var options = defaultOptions;
	for(var option in incomingOptions || {})
	{
		options[option] = incomingOptions[option];
	}

	//return the actual middleware function
	return function(req,res,next)
	{

	}
};