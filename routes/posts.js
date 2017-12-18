module.exports=(posts,client)=>{

    posts.get("/posts",(req,res)=>{
        res.render("posts")
    })

    posts.post("/posts", (req, res) => {
        var title = req.body.title
        var comment = req.body.comment
        var post = req.body.message_id
        var user = req.session.user.id

        const insertPost = {
            text: `INSERT INTO posts (title, comment, post_id, user_id) values('${title}','${comment}','${post}', '${user}');`,
        }

        client.query(insertPost, (err, result) => {
            console.log("USER", user)
            if (err) throw err
            console.log("test", result)
        res.redirect("profile")
        })
    })
}
