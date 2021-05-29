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
   setTimeout(() => {
    allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
   }, 1000);
  });
};

//toggleUserState.then(logger);

function logger(result) {  
  console.table(result);
};

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);