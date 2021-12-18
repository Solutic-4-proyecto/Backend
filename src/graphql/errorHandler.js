

function errorHandler(error){
    console.error(error)
    throw new Error('Problemas en la Ejecución del Servidor')
}

module.exports=errorHandler