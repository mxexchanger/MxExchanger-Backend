import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import userRouter from './routes/userRoutes.js';
import adminRoute from './routes/adminRoutes.js';
import { errorMiddleware } from './middlewares/error.js';

const app = express();

// ✅ FINAL CORS CONFIG
const corsOptions = {
    origin: ['https://mxexchanger.com', 'http://mxexchanger.com', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // ✅ Enable cookies or auth headers
};

// ✅ USE CORS (must be at top)
app.use(cors(corsOptions));

// ✅ HANDLE PREFLIGHT (CORS OPTIONS requests) - THIS FIXES YOUR ERROR!
app.options('*', cors(corsOptions));

// ✅ PARSERS
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// ✅ ROUTES
app.use('/api/v1/', userRouter);
app.use('/api/v1/', adminRoute);

// ✅ DEFAULT ROOT TEST ROUTE
app.get('/', (req, res) => {
    res.send('Server is Working');
});

// ✅ GLOBAL ERROR HANDLER
app.use(errorMiddleware);

export default app;
