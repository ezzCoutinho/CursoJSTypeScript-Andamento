type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username &&
    user.password === sentValue.password
  );
};

const bdUser: { username: string; password: string } = {
  username: 'luiz',
  password: '123',
};

const ddUser: { username: string; password: string } = {
  username: 'luiz',
  password: '123',
};

const loggedIn = verifyUser(ddUser, bdUser);

console.log(loggedIn);

//modulo Mode
export default 1;
