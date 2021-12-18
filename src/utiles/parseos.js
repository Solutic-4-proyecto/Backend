module.exports = {
  parseoRol: (objeto) => {
    let intRol = objeto.rol;

    if (intRol === 2) {
      objeto.rol = "Lider";
    } else if (intRol === 3) {
      objeto.rol = "Administrador";
    } else {
      objeto.rol = "Estudiante";
    }

    return objeto;
  },
  parseoEstado: (objeto) => {
    let intEstado = objeto.estado;

    if (intEstado === 2) {
      objeto.rol = "Pendiente";
    } else if (intEstado === 3) {
      objeto.rol = "Autorizado";
    } else {
      objeto.rol = "No_Autorizado";
    }

    return objeto;
  },
};
