const express = require("express")
const app = express ()
app.use(express.static(__dirname+"/public/proyecto"))
app.use(express.urlencoded({extended:false}))
app.post("/R", (req,res)=>{

    let email = req.body.email
    let clave = req.body.clave
    let sql = "insert into usuarios(correo,nombre,contraseña)value('"+correo+"','"+contraseña+"')"
    pool.query(sql,(error,result,campo)=>{
        res.send(result);
    })
})
const path = require ("path")

const mysql = require ("mysql")

var pool = mysql.createPool({
    conectionLimit: 10, 
    host:"localhost",
    user: "root",
    password: "",
    dataase:"base_de_datos"
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/proyecto/home.html"))
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/proyecto/index.html"))
})
 app.post("/index",(req,res)=>{
    let nombre= req.body.nombre;
    let correo= req.body.correo;
    let usuario= req.body.usuario;
    let contraseña= req.body.contraseña;

    let sql = "insert into registo(correo,contraseña,usuario)values('${correo}','${contraseña}','${usuario}')"
    ool.query sql,(error,result,campo)=>{res.send(resut);}
    ) 
})
app.post("/login",(req,res)=>{
    INSERTINTO = usuarios ("nombre","correo","contraseña"); value('nombre','correo','contraseña');
    let email= req.body.info_email;
    let contraseña= req.body.info_contraseña; 

})
    
app.listen(3000,()=>{console.log("serveron")})