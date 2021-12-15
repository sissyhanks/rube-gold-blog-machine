const submitBlogPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value;
  const blog_text = document.querySelector('#blog-body').value;


    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, blog_text }),
      headers: {
        'Content-Type':
        'application/json'
      }
    });

    if(response.ok) {
      document.location.replace('/');
    }  else {
      alert(response.statusText);
    }
};

document.querySelector('.blog-post').addEventListener('submit', submitBlogPost);