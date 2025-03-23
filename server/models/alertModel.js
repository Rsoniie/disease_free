import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const alertSchema = new Schema({
    heading: {
        type: String, 
        required : true
    },
    description : {
        type : String,
        required : true
    },
    link : {
        type: URL,
    },
    icon : {
        type : URL
    }
});

const Alert = mongoose.model('Alert', alertSchema);
export default Alert;