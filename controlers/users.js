import { v4 as uuidv4 } from 'uuid';

let users = [];

// GET all users in the DB
export const getUsers = (req, res) => {
    res.send(users);
};

// create a new user
export const createUser = (req, res) => {
    let user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send("POST route");
};

// GET a new user based on ID
export const getUser = (req, res) => {
    const { id } = req.params;
    let user = users.find(user => user.id === id);
    res.send(user);
};

// Delete User
export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== id);
    res.send(users);
};

// Modofy user details
export const patchUser = (req, res) => {
    const { id } = req.params;

    const { firstname, lastname, age } = req.body;

    const user = users.find(user => user.id === id);

    if (firstname) user.firstname = firstname;
    if (lastname) user.lastname = lastname;
    if (age) user.age = age;

    res.send(`${user.firstname} has been modified...`);
};