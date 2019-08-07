const mongoose = require("mongoose");
const User = require("./models/User");
const Discapacidades = require("./models/Discapacidades");
const Aulas = require("./models/Aulas")
const Estudiantes = require("./models/Estudiantes");
const Programas = require("./models/Programas");
const Bloques = require("./models/Bloques");
const Facultades = require("./models/Facultades");
const Edificios = require("./models/Edificios");
const Clases = require("./models/Clases");

class Controller{
    constructor(){
        this.connect();
    }

    async connect(){
        try{
            await mongoose.connect(
                "mongodb+srv://campus_inclusivo:yuren0930*@cluster0-lp0g3.mongodb.net/proyecto_inclusivo?retryWrites=true&w=majority",
                {useNewUrlParser:true}

            );
            console.log("¡Conexion establecida!")

        }catch(e){
           console.error(e)
        }
    }

    getUsers(res){
        User.find({}, (err, users)=>{
            if(err) throw err;

           res.send(users);
        })
    }

getEstudiantes(res){
        Estudiantes.find({}, (err, estudiantes)=>{
            if(err) throw err;

           res.send(estudiantes);
        })
    }
getProgramas(res){
        Programas.find({}, (err, programas)=>{
            if(err) throw err;

           res.send(programas);
        })
    }

     getDiscapacidades(res){
        Discapacidades.find({}, (err, discapacidades)=>{
            if(err) throw err;

            res.send(discapacidades);
        })
    }
    /*getDiscapacidadesportipo(tipo, res){
        Discapacidades.find({tipo:tipo}, (err, discapacidades)=>{
            if(err) throw err;

            res.send(discapacidades);
        })
    }*/
getAulas(res){
        Aulas.find({}, (err, aulas)=>{
            if(err) throw err;

            res.send(aulas);
        })
    }

    getBloques(res){
        Bloques.find({}, (err, bloques)=>{
            if(err) throw err;

            res.send(bloques);
        })
    }

     getFacultades(res){
        Facultades.find({}, (err, facultades)=>{
            if(err) throw err;

            res.send(facultades);
        })
    }

    getEdificios(res){
        Edificios.find({}, (err, edificios)=>{
            if(err) throw err;

            res.send(edificios);
        })
    }

    getClases(res){
        Clases.find({}, (err, clases)=>{
            if(err) throw err;

            res.send(clases);
        })
    }
}


exports.controller = new Controller()