module.exports=(app, client)=>{
	app.get("/navbar",(req,res)=>{
	res.render("navbar")
	})
}