module.exports= (messages, client) =>{

    messages.get("/messages", (req,res)=>{
    const getMessage = {
        text: 'SELECT * FROM messages',
    }

    client.query(getMessage) 
    .then((res2)=>{

        var messages = res2.rows

        console.log("HIERZO",messages)
        res.render("messages", {result:messages})
    })
})

messages.post("/messages", (req, res) => {
    console.log("Session Check", req.session.user)
    var title = req.body.title
    var body = req.body.message
    var user = req.session.user.id

    const insertMessage = {
        text: `INSERT INTO messages (title, body, user_id) values('${title}','${body}','${user}');`,
    }

    client.query(insertMessage, (err, result) => {
        console.log("USER", user)
        if (err) throw err
        console.log("test", result)
    res.redirect("profile")
    })

})

}
