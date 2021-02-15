const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000

let stden = [
    { id: 1, name: 'TANNUT', lname: 'TANNUT' },
    { id: 2, name: 'PATTHANAN', lname: 'TANNUT' },
    { id: 3, name: 'WARINTORN', lname: 'TANNUT' },
    { id: 4, name: 'WARINTORN', lname: 'TANNUT' },
]

app.use(cors())

app.get('/', (req, res) => {
    res.json(stden)
})

app.listen(PORT, () => console.log(`listen at ${PORT}`))