import express, { Request, Response } from "express";
import routes from './router';
import"./data_base"
const app = express();
app.use(express.json())
app.use('/', routes)
app.get('/', (req: Request, res: Response) => {
    res.send('Requst success')
})
const port="6000"
app.listen(port, () => {
    console.log('server is running at',port)
})
