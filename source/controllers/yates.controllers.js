const Departamentos = require("../model/departamentos");

// Obtener todos los yates
exports.obtenerYatess = async (req, res) => {
  try {
    const Yates = await Departamentos.find();
    res.json({
      status: "ok",
      departamentos,
    });
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al obtener los departamentos" });
  }
};

// Obtener un departamento por su ID
exports.obtenerYatesPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const Yates = await Yates.findById(id);
    if (Yates) {
      res.json(departamento);
    } else {
      res.status(404).json({ mensaje: "No se encontró el departamento" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al obtener el departamento" });
  }
};

// Crear un nuevo departamento
exports.crearYates = async (req, res) => {
  const { nombre, descripcion, precio } = req.body;
  try {
    const Yate = await Yates.create({
      nombre,
      descripcion,
      precio,
    });
    res.status(201).json(Yates);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al crear el yate" });
  }
};

// Actualizar un Yate existente
exports.actualizarDepartamento = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    const departamento = await Departamentos.findByIdAndUpdate(
      id,
      { nombre, descripcion },
      { new: true }
    );
    if (departamento) {
      res.json(Yate);
    } else {
      res.status(404).json({ mensaje: "No se encontró el departamento" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al actualizar el departamento" });
  }
};

// Eliminar un departamento existente
exports.eliminarDepartamento = async (req, res) => {
  const { id } = req.params;
  try {
    const departamento = await Departamentos.findByIdAndDelete(id);
    if (departamento) {
      res.json({ mensaje: "Departamento eliminado correctamente" });
    } else {
      res.status(404).json({ mensaje: "No se encontró el departamento" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al eliminar el departamento" });
  }
};
