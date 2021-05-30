const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

// const logger = updatedUsers => console.table(updatedUsers);
 

const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve => {
   
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );

   resolve(updatedUsers);
  });
};

const logger = updatedUsers => console.table(updatedUsers);
//toggleUserState.then(logger);



toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);