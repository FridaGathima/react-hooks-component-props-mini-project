import React from "react";
import Article from "./Article"

function ArticleList ({posts}) {
    return (
        <main>
           {posts.map(post =>
                <Article key = {post.id}
                title = {post.title}
                date = {post.data}  
                preview = {post.preview}
                />)} 
        </main>
    )
}

export default ArticleList