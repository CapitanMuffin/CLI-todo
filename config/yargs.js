const descripcion = {
	demand: true,
	alias: 'd',
	desc: 'Nombre de la tarea'
}
const completado = {
	alias: 'c',
	default: true,
	desc: 'Completa una tarea'
}

const argv = require('yargs')
	.command('crear', 'Crea una tarea por hacer', {
		descripcion
	})
	.command('actualizar', 'Actualiza una tarea', {
		descripcion,
		completado
	})
	.command('borrar', 'Elimina una tarea', {
		descripcion
	})
	.help()
	.argv

module.exports = argv;