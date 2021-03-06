module.exports = (searchbar, client) => {
    searchbar.get("/userMessages", (req, res) => {
        if (req.session.user) {
            res.render("userMessages")
        } else {
            res.render("index")
        }
    })

    searchbar.post("/userMessages", (req, res) => {
        var firstname = req.body.firstname
        var lastname = req.body.lastname
        var email = req.body.email

        const getUserMsg = {
            text: `SELECT * FROM messages WHERE user_id = (SELECT id FROM users WHERE email = '${email}' OR firstname = '${firstname}' OR lastname = '${lastname}');`
        }

        client.query(getUserMsg, (err, result) => {

            if (err) throw err
            var match = result.rows
        
            res.render("msg", { email: email, lastname: lastname, firstname: firstname, match: match })
        })
    })
}