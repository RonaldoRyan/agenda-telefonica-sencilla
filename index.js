// traemos express
import express from  'express'
import { addContact } from './src/mySql_conector.js'
import { takeContact } from './src/mySql_conector.js'
import { removeContact } from './src/mySql_conector.js'

const app = express()

let todos = [];


// config de archivos estaticos
// app.use(express.static("./vistas"))

app.set('view engine', 'ejs');
app.set('views', './vistas')

app.use(express.static('./src'))
app.use(express.static('./css'))


// config server y renderizado  

app.get('/', (req, res) =>{
     todos = takeContact()
     res.render('./index.ejs', {contactos : todos})

})




// agregar
app.get('/agregar/:names/:number/:adress', (req,res)=>{
    let names = req.params.names
    let number = req.params.number
    let adress = req.params.adress
    addContact(names, number,adress)
    console.log(names, number, adress)
    res.redirect('/')
})
// eliminar
app.get('/borrar/:id', (req, res)=>{
let id = req.params.id
console.log(id)
removeContact(id)
res.redirect('/')
})

app.use((req, res)=>{   
res.status(404).send('Ruta No encontrada')
})

app.listen(3000,()=> console.log('Server on board'));


