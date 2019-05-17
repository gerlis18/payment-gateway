import { Document } from 'mongoose';

export interface User extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly documentType: string;
    readonly documentNumber: number;
    readonly email: string;
    readonly password: string;
    readonly cellPhone: string;
}
