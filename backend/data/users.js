import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Dhanurjan',
    email: 'dhanurjan98@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'mojo',
    email: 'mojo@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'kasun',
    email: 'kasun@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'sunil',
    email: 'sunil@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users
