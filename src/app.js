const express = require('express')
const sql = require("mssql");

const app = express()
const port = 3000

const findAll = async () => {
    await sql.connect('Server=(localdb)\\MSSQLLocalDB;Port=51947;Database=DeliveryDb;Encrypt=false;Trusted_Connection=True')
    const result = await sql.query`select * from Dish`
    console.dir(result)
};

app.get('/', async (req, res) => {
    await findAll();
    res.send('Hello World!')
})

app.get('/dish/getDishes', (req, res) => {
    res.send('List all dishes')
})

app.get('/dish/getDish', (req, res) => {
    res.send('List specific dish')
})

app.post('/dish/createDish', (req, res) => {
    res.send('Got a POST request')
})

app.put('/dish/updateDish', (req, res) => {
    res.send('Got a PUT request at /dish')
})

app.delete('/dish/deleteDish', (req, res) => {
    res.send('Got a DELETE request at /dish')
})

app.listen(port, () => {
  console.log(`Example app running on http://localhost:${port}`)
})