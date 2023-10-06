import express from 'express';


const app = express();

app.use(express.json())

const port = 4000;

let data  = [
    {id: 1,year: 2021, model: 'ford' , price:10000, color: 'red'},
    {id: 2,year: 2019, model: 'chevrolet' , price:20000, color: 'blue'},
    {id: 3,year: 2024, model: 'fiat' , price:25000, color: 'blue'}
]


app.get('/',(req,res)=>{
    res.json({ data
    })
})

app.post('/', (req,res)=>{
    const {year, model, price, color}= req.body
    const newCar = {
        id: Date.now(),
        year : year,
        model: model,
        price: price,
        color: color
    }
        data.push(newCar)
        res.json({"data": data})

    console.log(req.body);
    res.json({ "data": "si"})
})

app.listen(5000, ()=>{
    console.log('app listening  ${port}')
})

