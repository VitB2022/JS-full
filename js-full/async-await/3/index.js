'use strict';

export const getUsersBlogs = async users => {
  const result = await Promise.all(users.map(user => getBlog(user)));
  return result;
};

const getBlog = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }
    const data = await response.json();

    return data.blog;
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};

// examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList));
// ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]

// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList));
// ==> ["https://opensource.microsoft.com"]
