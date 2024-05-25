import { Schema, model } from "mongoose";

/*
{
    "handle": "cola-glitter-23-grs",
    "title" : "Para hacer pegaduras, contornos, decorar y pintar sobre papel, papel cartón y cartulina",
    "sku": "60870131001",
    "grams": "100,00",
    "stock": "1.013",
    "price": "1.161,00",
    "compare": "1.290,00",
    "barcode": "7891153003689"
}
*/

const productSchema = new Schema({
    handle: String, 
    title: String,
    description: String, 
    sku: Number, 
    grams: Number, 
    stock: Number, 
    price: Number,
    compare: Number,
    barcode: Number
}, {
    timestamps: true,
    versionKey: false
})

export default model('product', productSchema);