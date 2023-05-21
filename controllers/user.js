const User = require('../models/user');

exports.getUsers = (req,res) => {
    User.findAll()
        .then(result => {
            res.status(200).json({users: result})
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: 'Users get error'})
        })
}

exports.getUser = (req, res) => {
    const { userId } = req.body;
    User.findByPk(userId)
        .then(result => {
            res.status(201).json({result})
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: 'User get error'})
        })
}

exports.addUser = (req, res) => {
    const {name} = req.body;
    User.create({
        name
    })
        .then(result => {
            console.log(result)
            res.status(201).json({message: "User created"})
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: "User create error"})
        })
}

exports.updateUser = (req, res) => {
    const userId = req.params.userId;
    const {name} = req.body;
    User.update({
            name
        },
        {
            where: {
                id: userId
            }
        })
        .then(result => {
            console.log(result);
            res.status(200).json({message: 'User updated'})
        })
        .catch(error => {
            console.log(error);
        })
}

exports.deleteUser = (req, res) => {
    const { userId } = req.body;
    User.destroy({
        where: {
            id: userId
        }
    })
        .then(() => {
            res.status(200).json({message: 'User deleted'})
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: "User delete error"})
        })
}
