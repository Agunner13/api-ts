import * as mongoose from 'mongoose'

class Database {
    private DB_URL = "mongodb://link-db/db_portal";

    createdConection(){
        mongoose.connect(this.DB_URL);
    }

}

export default Database;