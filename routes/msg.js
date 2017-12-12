module.exports = (msg, client) =>{
	msg.get("/msg", (req, res) => {
        if(req.session.user){

            var specMsg={
            text: `SELECT * FROM messages where user_id = (SELECT id FROM users WHERE email = '${email}' OR firstname = '${firstname}' OR lastname = '${lastname}');`,
            }

            client.query(specMsg, (err, response) => {
                console.log(response.rows)

                var match = response.rows
                console.log("THIS IS THE MOMENT", result)
                res.render("msg", { match: match })
            })

        }
        else{
            res.render("index")
        }
    })
}