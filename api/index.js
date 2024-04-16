import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './config/db_config.js';
import authRouter from './routes/auth.routes.js'
import cors from 'cors'
import { globalErrorHandler } from './utils/globalErrorHandling.js';
import CustomError from './middlewares/customeError.js';
dotenv.config();
import cookieParser from 'cookie-parser';

const app = express()
const port = process.env.PORT || 8100;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// cors
app.use(cors());
// cookie-parser
app.use(cookieParser())

// database connection
dbConnection()

//auth routes
app.use("/api/auth", authRouter)
app.get("/",(req, res) =>{
    res.status(200).json({
        status: 'OK',
        message:"Mern Blog"
    });
})

app.all('*', (req, res, next) => {

    const err = new CustomError(`Can't find ${req.originalUrl} on the server!`, 404);
    next(err);
});


app.use(globalErrorHandler)

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})