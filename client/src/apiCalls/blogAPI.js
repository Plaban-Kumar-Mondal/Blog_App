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
