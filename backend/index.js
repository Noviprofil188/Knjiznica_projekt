const express = require ("express")
const app = express()
const cors = require("cors")
const bodyParser = require ("body-parser")
const mysql = ("mysql")
const PORT = 3000;

app.use (portParser.json())
app.use (bodyParser.urlencoded({extended:true}))
app.use (cors({origin:""}))

const connection = mysql.createConnection({
    host: 'student.veleri.hr',
    user: 'iooa',
    password: '11',
    database: 'iooa-kviz'
  });
 
app.use(express.urlencoded({ extended: true }));
 
connection.connect(function(err) {
    if (err) throw err;
    console.log("Povezano!");
  });


app.get("/api/knjige", (request, response) => {
    
    connection.query("SELECT * FROM knjiga", (error, results) => {
      if (error) throw error;
      response.send(results);
    });
/*
    request - slanje zahtjeva s klijentske strane
    response - slanje odgovora sa serverske strane

    npm install -g nodemon
*/
    //response.send("popis knjiga");
});

app.get("/api/knjige/:id", (request, response) => {
    const id = request.params.id;
    connection.query("SELECT * FROM knjiga WHERE id = ?", id, (error, results) => {
        if (error) throw error;
        response.send(results);
      });
    //response.send("jedna knjiga "+id);
});

app.post("/api/rezerv_knjige", (request, response) => {
    const data = request.body;
    rezervacija = [[data.datum, data.id_knjiga, data.id_korisnik]]

    connection.query("INSERT INTO rezervacija (datum_rez, knjiga, korisnik) VALUES ?", [rezervacija], (error, results) => {
      if (error) throw error;
      response.send(results);
    });
    
    //response.send("Poslano "+data.id_knjiga);
  });
  
  app.listen(port, () => {
    console.log("Server running at port: " + port);
});