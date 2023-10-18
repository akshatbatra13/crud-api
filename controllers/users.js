import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => { 
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body 
    // create new object with uuid
    const userId = uuidv4();
    const userWithId = { ...user, id: userId}
    console.log(userWithId)
    users.push(userWithId)
    console.log(users)
    res.send(`Record created for user with name: ${user.name}`)
}

export const getUserById = (req, res) => {
    // destruction
    const { id } = req.params;
    const reqUser = users.find((user) => user.id === id);
    res.send(reqUser);
}

export const deleteUserById = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with ${id} deleted`)
}

export const updateUserById = (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    let user = users.find((user) => user.id === id);

    if (name) user.name = name
    if (age) user.age = age

    res.send(`User with ${id} updated.`);
}
