import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Sam Doe',
    email: 'same@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
];

export default users;
