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


// SELECT users.name, agg( post.title)
// FROM users
// LEFT JOIN posts
// ON users.id = posts.user_id


// SELECT tags.name, post.title, post.body FROM tags_posts LEFT JOIN tag_posts ON tags.id= tag.posts.tag_id
// LEFT JOIN posts
// ON tags_post.post_id=post.id