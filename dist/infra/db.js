"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Database {
    constructor() {
        this.DB_URL = "mongodb://link-db/db_portal";
    }
    createdConection() {
        mongoose.connect(this.DB_URL);
    }
}
exports.default = Database;
