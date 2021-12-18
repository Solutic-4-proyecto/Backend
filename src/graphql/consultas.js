'use strict'
const connectDb = require('../databases');
const { ObjectId } = require('mongodb');
const errorHandler = require('./errorHandler');



module.exports = {

    getUsuarios: async () => {
        let db
        let usuarios = []
        try {
            //db = await connectDb()
            db=await connectDb()
           // usuarios =collection('usuarios').find().toArray()// await db.collection('usuarios').find().toArray()
           usuarios=await db.collection('usuarios').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return usuarios
    },
    
    getUsuarioID: async (root, { id }) => {
        let db
        let usuario
        try {
            db = await connectDb()
            usuario = await db.collection('usuarios').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return usuario
    },
    getUsuarioByCedula: async (root, { identificacion }) => {
        let db
        let usuariocedula
        try {
            db = await connectDb()
            usuariocedula = await db.collection('usuarios').findOne({ identificacion: identificacion })
        } catch (error) {
            errorHandler(error)
        }
        return usuariocedula
    },
    getLogin:async (root, { correo,contrasena }) => {
        let db
        let login
        try {
            db = await connectDb()
            login = await db.collection('usuarios').findOne({ correo: correo,contrasena:contrasena })
        } catch (error) {
            errorHandler(error)
        }
        return login
    },
    
    
    /*getLogin: async (root, { correo,contrasena }) => {
        let db
        let login
        try {
            db = await connectDb()
            login = await db.collection('usuarios').findOne({ correo: correo,contrasena:contrasena })
        } catch (error) {
            errorHandler(error)
        }
        return login
    },*/

    getProyectos: async () => {
        let db
        let proyectos = []
        try {
            db = await connectDb()
            proyectos = await db.collection('proyectos').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return proyectos
    },

    getProyectoID: async (root, { id }) => {
        let db
        let proyecto
        try {
            db = await connectDb()
            proyecto = await db.collection('proyectos').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return proyecto
    },

    getInscripciones: async () => {
        let db
        let inscripciones = []
        try {
            db = await connectDb()
            inscripciones = await db.collection('inscripciones').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return inscripciones
    },

  
    getInscripcionID: async (root, { id }) => {
        let db
        let inscripcion
        try {
            db = await connectDb()
            inscripcion = await db.collection('inscripciones').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return inscripcion
    },

    getAvances: async () => {
        let db
        let avances = []
        try {
            db = await connectDb()
            avances = await db.collection('avances').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return avances
    },

    getAvanceID: async (root, { id }) => {
        let db
        let avance
        try {
            db = await connectDb()
            avance = await db.collection('avances').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return avance
    }

}
