
const express = require('express')
const app = express()
const PORT = 9090

// Routes
const historyRoutes = require('../routes/history.routes')
const userRoutes = require('../routes/user.routes');
const authRoutes = require('../auth/Auth')
// Use Routes
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use('/history', historyRoutes)

app.listen(PORT, () => console.log(`Server running on: https://localhost:${PORT}`))
