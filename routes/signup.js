module.exports=(app, client)=>{


	app.get("/signup", (req,res)=>{
		var firstname = req.body.firstname
		var lastname = req.body.lastname
		var email = req.body.email
		var username = req.body.username
		var password = req.body.password

		res.render("signup") 
	})


	app.post("/signup",(req,res)=>{
		var firstname = req.body.firstname
		var lastname = req.body.lastname
		var email = req.body.email
		var username = req.body.username
		var password = req.body.password

console.log("firstname:", req.body.firstname, 
			" lastname: ", lastname, " email ",email, " username ", username, "password ", password )
		
			const userCheck ={
				text:`SELECT * FROM users WHERE username = '${username}' OR email = '${email}'`,
			}
			const insertNewUser =  {
			text: `INSERT INTO users(firstname, lastname, email, username, password) values('${firstname}','${lastname}','${email}','${username}','${password}');`
		}


		client.query( userCheck, (err,result)=> {

				// if (err){
				// 	throw err
				// }

				if(result.rows != 0){
					console.log("Username or email is already taken")
					res.render("signup")
					
				}

				else{ 
					client.query(insertNewUser,(err, result2)=>{
						if(err){ 
							throw err
						}

						else{
							console.log(result2)
							console.log("Succesvol Signup!")
							res.render("index")
						}

					})
					

				}
		})	
	})


}
