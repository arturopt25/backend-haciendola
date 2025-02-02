import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import {createRoles} from './libs/initialSetup'
import userRoutes from './routes/user.routes'
import cors from 'cors'

const app = express ()
createRoles();

app.set('pkg', pkg)

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/products',productsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes)

export default app;