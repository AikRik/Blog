module.exports=(app, client)=>{

	app.get("/login", (req,res)=> {
	  res.render("login")
	}),  

	app.post("/login", (req, res)=>{
			const loginUser = {
				text: `SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}'` 
			}
			

			client.query(loginUser, (err, response)=>{
			
			console.log("HEY", response)
			
			if (err){
				throw err
			}
			else if(response.rows[0].username === req.body.username && response.rows[0].password === req.body.password){
				req.session.user = response.rows[0]
				res.redirect("profile")

			}
			else{
				res.render("index")
			}
			})
	})
}

