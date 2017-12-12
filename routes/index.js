module.exports=(app, client)=>{
	app.get("/",(req,res)=>{
	if(req.session.user){
	
	var user = req.session.user.username
	console.log("HOWDOE ", user)
	res.render("index",{user:user})
	}
	else{
		res.render("index")
	}
	})

}

