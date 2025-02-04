const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let std = [
    { id: 1, name: 'Pattamaraj' },
    { id: 2, name: 'Panuwat' },
    { id: 3, name: 'jirapat' },
]

// get method
app.get('/std/:id', (req, res) => {
    let data = std.find(i => i.id == req.params.id)
    if (data != undefined) res.json(data)
    else res.json({ message: "Can't find" })
})

// post method
app.post('/std', (req, res) => {
    let stdID = std[std.length - 1].id + 1
    let stdName = req.body.name
    std = [...std, { id: stdID, name: stdName }]
    res.json(std)
})

// put method
app.put('/std/:id', (req, res) => {
    let data = std.find(i => i.id == req.params.id)
    if (data == undefined) res.json({ message: "ไม่มีไอดีนี้โว้ยยย Fucking bbiicthhhhhhh"})
        else data.name = req.body.name
    std.map((i) => {
        if (i.id == req.params.id) i.name = data.name
    })
    res.json(std)
})

// delete method  
app.delete('/std/:id', (req, res) => {
    std = std.filter(i => i.id != req.params.id)
    res.json(std)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

