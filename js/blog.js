// blog.js

fetch('/posts/')
  .then(response => response.json())
  .then(posts => {
    const blogContainer = document.getElementById('blog-container');
    posts.forEach(post => {
      const postElement = document.createElement('article');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <a href="post-template.html?post=${post.url}">Read More</a>
      `;
      blogContainer.appendChild(postElement);
    });
  });
