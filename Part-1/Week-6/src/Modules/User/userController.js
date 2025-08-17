import User from '../../../DB/Models/user.js';


export const addUser = async(req, res, next) => {

    const { name, email, password, address, gender } = req.body;

    // bulkCreate // insert array 
    // findOrCreate 
    const newUser = await User.create({
        name: name,
        email: email,
        password: password, 
        gender: gender,
        address: address
    })

    res.json({
        message: 'User Added Successfully', 
        user: newUser
    })
}


/**
 * Finders
 * findAll
 * findByPk
 * findOne
 * findAndCountAll
 * findOrCreate
 */


export const listUsers = async (req, res, next) => {
    const users = await User.findAll();

    // User.findByPk   => filter by primary key
    // const users = await User.findAndCountAll({
    //     where: {
    //         gender: 'male'
    //     }
    // });

    return res.json({
        message: 'Fetched Users Successfully',
        status: 200,
        data: users
    });
}


/**
 *  delete  use method destroy
 */


export const deleteUser = async (req, res, next) => {
    const data = await User.destroy({
        where: {
            id: req.query.id
        }
    });


    // data return count rows is deleted 

    if(data == 0){
        return res.json({message: 'Users No Found'});
    }


    return res.json({message: 'User Deleted Successfully', data});


}

/**
 *  update method
 */


export const updateUser = async (req, res, next) => {
    
    const { name, email } = req.body;
    const { id } = req.query;

    const data = await User.update(
        {
            name: name,
             email: email
        },
        {
            where:{
                id: id
            }
        }
    );


    // data return count rows is deleted 


    return res.json({message: 'User updated Successfully', data});


}