let success = true;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 1000);
  });
}

function onFulfilled(users) {
           users.forEach(element => {
            document.write(element.username+'<br>')
           })
}
function onRejected(error) {
  document.write(error);
}

const promise = getUsers();
promise.then(onFulfilled, onRejected);

// // ou bien 
// const promise = getUsers();
// promise.then(onFulfilled);
// promise.catch(onRejected);


// // ou on peut utiliser

// getUsers().then(onFulfilled, onRejected)

// // ou on peut utiliser

// getUsers().then((users) => {
//            users.forEach(element => {
//             document.write(element.username+'<br>')
//            });
//       }).catch((error)=>{
//         document.write(error);
//       });