import {Schema,model} from 'mongoose'

const passwordShema = new Schema({
    password: {
        type: String,
        required: [true,'please provide a password']
    },
    iv:{
        type: String,
        required: [true,'please check you iv']
    },
    title: {
        type: String,
        required: [true,'please provide a title']
    }
})

const PasswordModel = model('Password',passwordShema,'passwords')
export default PasswordModel;