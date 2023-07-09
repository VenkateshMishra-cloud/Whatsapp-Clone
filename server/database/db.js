import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-u4j8yda-shard-00-00.qof0ddc.mongodb.net:27017,ac-u4j8yda-shard-00-01.qof0ddc.mongodb.net:27017,ac-u4j8yda-shard-00-02.qof0ddc.mongodb.net:27017/?ssl=true&replicaSet=atlas-tmunf8-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;