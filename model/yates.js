const { Schema,model} = require("mongoose");

const yates = new Schema({
    nombre: String,
    descripcion: {
        type: String,
        require: true,
    },
    precio: Number
});

module.exports = model("Yates", yatesschema);