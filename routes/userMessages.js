module.exports = (searchbar, client) => {
    searchbar.get("/userMessages", (req, res) => {
        if(req.session.user){
            res.render("userMessages")
        }

        else{
            res.render("index")
        }
    })

    searchbar.post("/userMessages", (req, res) => {
            var firstname = req.body.firstname
            var lastname = req.body.lastname
            var email = req.body.email


            console.log("FIRSTNAMEEEEEEEE", firstname)
            console.log("LASTNAMEE", lastname)
            console.log("EMAIIIIIIIILLLL", email)

            const getUserMsg = {
                text: `SELECT * FROM messages WHERE user_id = (SELECT id FROM users WHERE email = '${email}' OR firstname = '${firstname}' OR lastname = '${lastname}');`
            }
           
    
  
            client.query(getUserMsg, (err, result) => {
                console.log("HEREEEEEEE NZO", result)
                if(err) throw err
                var match = result.rows 
                console.log("GIMME THA MONNEEEYYY", match)
               
                res.render("msg", { email: email, lastname: lastname, firstname: firstname, match: match })
            })
    })
}