function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      }, 1000);
    });
  }
  
//   function onFulfilled(users) {
//    users.forEach(element => {
//     document.write(element.username+'<br>')
//    });
//   }
  
//   const promise = getUsers();
//   promise.then(onFulfilled);

// //    ou bien
// const promise = getUsers();
// promise.then((users) => {
    
//     users.forEach(element => {
//         document.write(element.username+'<br>')
//        });
//   });

// //    ou bien
/* Because the getUsers() function returns a promise object,
 you can chain the function call with the then() method like this:*/

// getUsers().then((users) => {
//        users.forEach(element => {
//         document.write(element.username+'<br>')
//        });
//   });