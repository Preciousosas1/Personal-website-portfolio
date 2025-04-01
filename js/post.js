// post.js

const urlParams = new URLSearchParams(window.location.search);
const postUrl = urlParams.get('post');  // Get the post URL from query params

fetch(postUrl)
  .then(response => response.text())
  .then(content => {
    document.getElementById('post-content').innerHTML = marked(content);  // Use Marked.js to convert Markdown to HTML
  })
  .catch(error => console.error("Error loading post:", error));
