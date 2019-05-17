import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: [true, 'Primer nombre es requerido']},
    lastName: {type: String, required: [true, 'Apellido es requerido']},
    documentType: {type: String, enum: ['CC', 'CE', 'NIT'], required: [true, 'Tipo de documento es requerido']},
    documentNumber: {type: Number, required: [true, 'Numero es requerido']},
    email: {type: String, required: [true, 'El email es requerido']},
    password: { type: String, required: [true, 'La contraseña es requerida'] },
    cellPhone: { type: String, required: [true, 'Numero de teléfono es requerido'] }
});
