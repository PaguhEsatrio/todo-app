const users = [
  {
    username: 'admin',
    password: '123'
  }
];

export const authenticate = (password) => {
  const user = users.find(user => user.password === password);
  return user !== undefined;
};
