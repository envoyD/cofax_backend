import db from "../db"

// db connection
const connection = db.connection

// required collection
const userCollection = connection.collection('users')

const UserService = {
    // get user details
    getInfo: async(email: String) => {
        try{
            return await userCollection.find({email}).toArray()
        }catch(err){
            console.log(err)
            return err
        }
    },

    // is user exists
    isExist: async (email: String) => {
        try{
            const user = await userCollection.find({email}).toArray()
            return user.length > 0
        }catch(err){
            console.log(err)
            return err
        }
    },

    // create new user
    createNew: async(userDetail: Object) => {
        try{
            return await userCollection.insertOne(userDetail)
        }catch(err){
            console.log(err)
        }
    }

}

export default UserService