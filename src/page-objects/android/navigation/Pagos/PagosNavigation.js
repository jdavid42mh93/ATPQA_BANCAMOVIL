import pagosController from "../../../../controllers/Pagos/pagos.controller";
// Funciones para navegar entrelos distintos tipos de transferencias
class PagosNavigation{
    async pagosServiciosRegistrados() {
        await pagosController.pagosServiciosRegistradosSeccion();
    }

    async pagosServiciosEventuales() {
        await pagosController.pagosServiciosEventualesSeccion();
    }

    async pagosMisTarjetas() {
        await pagosController.pagosMisTarjetasSeccion();
    }

    async pagosTarjetasRegistradas() {
        await pagosController.pagosTarjetasRegistradasSeccion();
    }

    async pagosTarjetasEventuales() {
        await pagosController.pagosTarjetasEventualesSeccion();
    }
}

export default new PagosNavigation();
