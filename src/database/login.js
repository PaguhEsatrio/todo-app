const users = [
  {
    name: 'Strangers',
    username: 'spv',
    password: 'server',
  },
];

const getauthenticate = (username, password) => {
  return users.find((user) => user.username === username && user.password === password);
};

export { getauthenticate };
