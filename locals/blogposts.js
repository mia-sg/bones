const mysql = require('mysql2');

function generatePost(p_post){
    return ` <div class="post-entry-1">
    <div class="post-meta"><span>${p_post.created_at}</span></div>
    <h2><a href="single-post.html">${p_post.title}</a></h2>
    <p class="mb-4 dblock">${p_post.content}</p>
  </div>
  <hr class="dotted">`
};

function printPosts(posts){

        let html ="";
        posts.forEach(p_post =>{
            html += generatePost(p_post);
        });

        return html;
    };

module.exports = {
    printPosts,
    generatePost
}