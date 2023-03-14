// importamos mysql2

import mysql from 'mysql2'
let todos = []

// creamos la conexion con MySQL

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Ryan9718',
    database: 'proyecto_node'
  });
  
  connection.connect((error) => {
    if (error) {
      console.error('Error connecting to the database: ' + error.stack);
      return;
    }
  
    console.log('Connected to the database');
  });

  
//   creamos una funcion que agrega los datos que recibimos mediante la url

const addContact = (name,number,adress)=>{
    const sql = `INSERT INTO contacto(name, phone_number, adress) VALUES ('${name}','${number}','${adress}')`
    connection.query(sql, (err, result, filed)=>{
          if(err) throw err
          console.log(result)
    })
}

// obtener los contactos
const takeContact = () => {
  const sql = `SELECT * FROM contacto`;
  connection.query(sql, (err, result, field) => {
    todos = result
    if (err) throw err;
  })
  return todos
};


// funcion para eliminar los contactos

const removeContact = idContacto =>{
  const sql = `DELETE FROM contacto
  WHERE idContacto = ${idContacto};
  `
  connection.query(sql,(err, result ,filed )=>{
     if(err) throw err
     console.log(result)
     console.log(idContacto)
  })

}
  

export {addContact, takeContact, removeContact}