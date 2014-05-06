Random Notes
	
	globals
		console
		process
			.argv
		--filename
		--dirname
		module
		require

	Terminal
		yo-refactoru-html
		mv .npmignore .gitignore
		cat package.json
		cat > test.js
		node app.js
		CTRL-A beginning of line in terminal
		CTRL-E end of line in terminal
		CTRL+C Kills the SERVER
		sudo npm install -g nodemon
		nodemon --version
		nodemon app.js

	Status Codes
		200 OK
		301 Multiple Choices
		302 Moved Temporarily (res.redirect)
		304 Not Modified
		404 Not Found
		500 Internal Server Error

	Client
		Chrome Developer Tools
		Network Tab
			CMD+SHIFT+R
		http://localhost:"PORT"
		http://localhost:6192
		http://127.0.0.1:"PORT"
		http://127.0.0.1:6192
		CMD+SHIFT+R refreshes the CLIENT and bypasses the cached version

	Routing - A system for mapping urls to resources
		route 1: /   --> /index.html
		route 2: /hi --> /hello.html
		route 3: /hi/raine  --> hello() {
									res.send('hi' + ...);
								}






