export const getUsers = (req, res) => {
    res.json([
        { id: 1, name: 'User 1', age: 25 },
        { id: 2, name: 'User 2', age: 30 },
        { id: 3, name: 'User 3', age: 35 }
    ]);
};


