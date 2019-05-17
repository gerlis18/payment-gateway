import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> => {
            return mongoose.connect('mongodb://paymenUser:puDatabase1@ds131676.mlab.com:31676/payments', {
                useNewUrlParser: true
            });
        }
    }
];
