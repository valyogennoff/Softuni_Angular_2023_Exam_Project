const express = require('express');
// const router = express.Router();
const mongoose = require('mongoose');
const cors = require('./middlewares/cors');
const authController = require('./controllers/authController');
const dataController = require('./controllers/dataController');
const trimBody = require('./middlewares/trimBody');
const session = require('./middlewares/session');
// const cors = require('cors');

const PORT = 3030;

mongoose.set('strictQuery', false);
const connectionString = 'mongodb://127.0.0.1:27017/angular-marketplace';
// const connectionString = 'mongodb+srv://gennoff72admin:DTgkOvR9DOWT2OpG@cluster0.wm3duuw.mongodb.net';


start();

async function start() {
    await mongoose.connect(connectionString);
    console.log('Database connected');

    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(trimBody());
    app.use(session());

    app.get('/', (req, res) => {
        res.json({ message: 'REST service operational' });
    });

    app.use('/users', authController);
    app.use('/data/catalog', dataController);

    // router.get('/profile', auth(),authController.getProfileInfo);
    // router.put('/profile', auth(),authController.editProfileInfo);

    app.listen(PORT, () => console.log('REST service started'));
}