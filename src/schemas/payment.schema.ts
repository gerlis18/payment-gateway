import * as mongoose from 'mongoose';

export const PaymentSchema = new mongoose.Schema({
    value: { type: Number, required: [true, 'El valor es requerido'] },
    description: { type: String, required: [true, 'La descripcion es requerida'] },
    status: String,
    statusDetail: String
});
