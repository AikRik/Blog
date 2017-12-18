module.exports=(app, client, bcrypt)=>{

	app.get("/login", (req,res)=> {
	  res.render("login")
	}),  

	app.post("/login", (req, res)=>{

		var password = req.body.password
			
		const loginUser = {
			text: `SELECT * FROM users WHERE username = '${req.body.username}'` 
		}

		client.query(loginUser, (err, response)=>{
		
			if(response.rows > 0){
			var hash = response.rows[0].password

				bcrypt.compare(password, hash, function(err, result) {	


					if (err){
						throw err
					}

					else if(response.rows[0].username === req.body.username && result === true){
						req.session.user = response.rows[0]
						res.redirect("profile")
					}

					else{
						res.render("index")
					}
				})
			}
			else{
				res.render("index")
				
			}
		})
	})
}