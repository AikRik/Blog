module.exports = (app, client) => {
    app.get("/profile", (req, res) => {
        if (req.session.user) {
            const getMessage = {
                text: 'SELECT * FROM messages',
            }

            var user = req.session.user.username
            client.query(getMessage, (req, res2) => {


                var messages = res2.rows

                console.log("Messages ", messages)

                res.render("profile", { user: user, result: messages })

            })
        } else {
            res.render("index")
        }

    })

}