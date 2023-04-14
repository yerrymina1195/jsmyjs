let tableau= [
    { username: 'makhan', email: 'makhan@test.com' },
    { username: 'yacine', email: 'yacine@test.com' },
  ]

function getUsers(callback1,userArray) {
    // setTimeout(() => {
    //   callback1(
    //     userArray);
    // }, 1000);
     callback1(userArray)
    
  }
  
  function pfindUser(username, callback2) {
    getUsers(() => {
      const user = tableau.find((user) => user.username === username);
      callback2(user);
    },tableau);
  }
  
  pfindUser('makhan', console.log);
 




  function getUsers(callback1) {
    setTimeout(() => {
      callback1([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  }
  
  function findUser(username, callback2) {
    getUsers((u) => {
      const user = u.find((user) => user.username === username);
      callback2(user);
    });
  }
  
  findUser('john', console.log);