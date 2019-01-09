const argv = require('./config/yargs');
const colors = require('colors/safe');

const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
	
	case 'crear':

		let tarea = crear(argv.descripcion);
		console.log(tarea);
		break;
	
	case 'listar':

		let listado = getListado();

		console.log(colors.bgWhite.black('Listado de tareas por hacer'));

		for (let tarea of listado) {

			console.log(colors.green('=================='));
			console.log(colors.yellow(tarea.descripcion));

			if (tarea.completado) {
				console.log('Estado: ', colors.green(`✔️ ${tarea.completado}`));
			} else {
				console.log('Estado: ', colors.red(`✖️ ${tarea.completado}`));
			}

			console.log(colors.green('=================='));

		}
		break;

	case 'actualizar':

		let actualizado = actualizar(argv.descripcion, argv.completado);
		console.log(actualizado);
		break;

	case 'borrar':
		
		let borrado = borrar(argv.descripcion);
		console.log(borrado);
		break;

	default:
		console.log('Comando no es reconocido');
		break;

}