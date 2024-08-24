import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import conectarDB from './config/db.js'
import veterinarioRoutes from './routes/veterinarioRoutes.js'
import pacienteRoutes from './routes/pacienteRoutes.js'

const app = express()
app.use(express.json())

dotenv.config()

conectarDB()

const corsOptions = {
  origin: function (origin, calkback) {
    callback(null, true)
  }
}

app.use(cors(corsOptions))

app.use('/api/veterinarios', veterinarioRoutes)
app.use('/api/pacientes', pacienteRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`)
})
