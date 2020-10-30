const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const savedInfoSchema = new Schema({
    departureName:{type: Array, required: true},
    destinationName:{type: Array, required: false},
    price:{type: Number, required: true},
    carrierName:{type:String, required:false},
    userId:{type:Array, required:true},
    departureDate:{type: Array, required: false},
    time:{type: Array, required: false},
    userName:{ type: String, required: false},
},{
    timestamps:true,
});

const SavedInfo = mongoose.model('SavedInfo', savedInfoSchema);

module.exports = SavedInfo;