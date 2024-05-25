import mongoose from "mongoose";

mongoose.connect("mongodb+srv://victor:LbfQlkHDsr10zao9@api-company.ccgqzx0.mongodb.net/companydb")
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error))