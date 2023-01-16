let User = require('../model/user');

// Ajout d'un user (POST)
// function postUsers(req, res) {
//   let users = new User();
//   assignment.nom = req.body.nom;

//   console.log("POST Users reçu ");
//   console.log(users)

//   users.save((err) => {
//     if (err) {
//       res.send('cant post assignment ', err);
//     }
//     res.json({ message: `${users.userName} saved!` })
//   })
// }
function getUsers(req, res) {
  User.find((err, users) => {
    if (err) {
      res.send(err)
    }

    res.send(users);
  });
}

function getUserById(req, res) {
  let userId = req.params.id;

  User.findOne({ id: userId }, (err, user) => {
    if (err) { res.send(err) }
    res.json(user);
  })
}

function getUserByName(req, res) {
  let userName = req.params.name;

  User.findOne({ userName: userName }, (err, user) => {
    if (err) { res.send(err) }
    res.json(user);
  })
}


function postUser(req, res) {
  let userName = req.body.user;
  let password = req.body.password;
  User.findOne({ user: userName }, (err, user) => {
    if (err) {
      res.send(err);
    }
    if (user === null) {
      res.json({ message: 'crotte' });
    }
    if (user.password === password) {
      res.json({ 'message': 'TRUE', 'user': user });
    } else {
      res.json({ message: "FALSE" });
    }
  })
  console.log(" LALALALALLALA");
}

module.exports = { getUserById, getUserByName, getUsers, postUser };
