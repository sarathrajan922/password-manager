import dotenv from 'dotenv';
dotenv.config();


const configKeys = {
    MONGO_DB_URL: process.env.MONGO_DB_URL as string,
    PORT: process.env.PORT,
    DB_NAME: process.env.DB_NAME,
    CRYPTO_SECRET: process.env.CRYPTO_SECRET as string,
}

export default configKeys;