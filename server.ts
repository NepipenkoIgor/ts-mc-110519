import express, { Request, Response } from 'express';
const app = express();
const port: number = 3000;
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (_req: Request, res: Response) => {
    res.send('hello world');
});
app.listen(port, () => {
    console.log(`server started on ${port}`);
});

