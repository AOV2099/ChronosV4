<script>
	import { HORARIO_URL } from '@/store';
	import { onMount } from 'svelte';
	import DataTale from './DataTale.svelte';

	let horarios = [];
	async function getHorarios() {
		try {
			const result = await fetch(HORARIO_URL, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (!result.ok) {
				throw new Error('Error al obtener los horarios');
			} else {
				return await result.json();
			}
		} catch (error) {
			console.error('Error al obtener los horarios:', error);
			return [];
		}
	}

	onMount(async () => {
		horarios = await getHorarios();
		console.log('Horarios obtenidos:', horarios);
	});
</script>

<div>
	{#if horarios.length > 0}
		<DataTale
			data={horarios}
			columns={[
				{ name: 'Profesor', field: 'profesor' },
				{ name: 'RFC', field: 'rfc' },
				{ name: 'Num. Trabajador', field: 'numTrabajador' },
				{ name: 'Domicilio', field: 'domicilio' },
				{ name: 'Teléfono', field: 'telefono' },
				{ name: 'Correo', field: 'correo-e' },
				{ name: 'Tipo', field: 'tipo' },
				{ name: 'Causa', field: 'causa' },
				{ name: 'Categoría', field: 'categoria' },
				{ name: 'Clave Asignatura', field: 'cveAsignatura' },
				{ name: 'Nombre Asignatura', field: 'nombreAsignatura' },
				{ name: 'Grupo', field: 'grupo' },
				{ name: 'Salón', field: 'salon' },
				{ name: 'Alumnos', field: 'almunos' },
				{ name: 'Hrs Teóricas', field: 'horasTeoricas' },
				{ name: 'Hrs Prácticas', field: 'horasPracticas' },
				{ name: 'Hrs Totales', field: 'horasTotal' },
				{ name: 'Hrs Teóricas Totales', field: 'horasTeoricasTotal' },
				{ name: 'Hrs Prácticas Totales', field: 'horasPracticasTotal' },
				{ name: 'Hrs Totales Totales', field: 'horasTotalTotal' },
				{ name: 'Horario', field: 'horario' },
				{ name: 'Plan de Estudios', field: 'planEstudios' },
				{ name: 'Observaciones', field: 'observaciones' },
				{ name: 'Título', field: 'titulo' },
				{ name: 'Día Inicio', field: 'diaIni' },
				{ name: 'Mes Inicio', field: 'mesIni' },
				{ name: 'Año Inicio', field: 'anoIni' },
				{ name: 'Día Fin', field: 'diaFin' },
				{ name: 'Mes Fin', field: 'mesFin' },
				{ name: 'Año Fin', field: 'anoFin' },
				{ name: 'Lab', field: 'lab' }
			]}
		/>
	{:else}
		<p>No hay horarios disponibles.</p>
	{/if}
</div>
