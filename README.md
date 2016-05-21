# express-secretsite

Simple express middleware to hide a website behind a basic password entry form.

Hide the password entry form itself by ignoring requests unless they visit a specific pathname (optional).

## Installation

	$ npm install express-secretsite
	
## Simple usage

```js
	app.use(require('express-secretsite')( {
		password: "thisIsMyPassword"
	} ) );
```

## Default options

`password` is just one of the options available.  The options, and their default values, are explained below.

```js
	var defaultOptions =
	{
		/* when specified, the user must access this pathname in order to see the password entry page */
		entryPoint: "/unlock-access/",
		
		/* the password required to see the site */
		password: "guest",
		
		/* optionally override the path used for loading the password form */
		passwordInputPagePath: path.resolve(__dirname, "..", "data", "passwordForm.html"),
		
		/* optionally override the path used for loading the password confirmation page */
		passwordConfirmationPath: path.resolve(__dirname, "..", "data", "passwordConfirmation.html"),
		
		/* if set to true, will respond with a simple 403 message instead of simply ignoring requests */
		respondWith403: false
	}; 
```