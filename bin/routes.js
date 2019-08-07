const express = require("express");
const app = express();
const {controller} = require("./Controller")

app.get("/", (req, res)=>{
    res.send("hola bienvenido");
})

app.get("/users", (req, res)=>{
    /*let users = [
        {name:"Juan", password:"hjkl123"},
        {name:"Yuren", password:"qwe249k"},
    ]
    res.send(users);*/
    controller.getUsers(res);
})

app.get("/estudiantes", (req, res)=>{
controller.getEstudiantes(res);
})
app.get("/programas", (req, res)=>{
controller.getProgramas(res);
})

app.get("/discapacidades", (req, res)=>{
 controller.getDiscapacidades(res);
})

/*app.get("/discapacidades/s/", (req, res)=>{
 controller.getDiscapacidadesportipo(tipo, res);
})*/
app.get("/aulas", (req, res)=>{
 controller.getAulas(res);
})

app.get("/bloques", (req, res)=>{
 controller.getBloques(res);
})

app.get("/facultades", (req, res)=>{
 controller.getFacultades(res);
})

app.get("/edificios", (req, res)=>{
 controller.getEdificios(res);
})

app.get("/clases", (req, res)=>{
 controller.getClases(res);
})


exports.app = app;