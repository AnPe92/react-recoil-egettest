const express = require('express')
const app = express();
const port = 8123;
app.get('/api/data', (req, res) => {
    res.json({ user: "kalle", password: "123" })
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})