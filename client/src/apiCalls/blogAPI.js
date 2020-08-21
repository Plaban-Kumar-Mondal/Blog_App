export const getAllBlogs = () => {
  return fetch(`/api/blogs`, {
    method: "GET",
  })
    .then((response) => response.json)
    .catch((err) => console.log(err));
};

export const createBlog = (userId, token, blog) => {
  return fetch(`/api/blog/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(blog),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
