import pagosMisTarjetasController from "../../../../controllers/Pagos/pagos-mis-tarjetas.controller";
import pagosServiciosEventualesController from "../../../../controllers/Pagos/pagos-servicios-eventuales.controller";
import pagosServiciosRegistradosController from "../../../../controllers/Pagos/pagos-servicios-registrados.controller";
import pagosTarjetasEventualesController from "../../../../controllers/Pagos/pagos-tarjetas-eventuales.controller";
import pagosTarjetasRegistradasController from "../../../../controllers/Pagos/pagos-tarjetas-registradas.controller";

// Funciones para navegar entre los distintos tipos de pagos
class PagosNavigation{
    async pagosServiciosRegistrados(data) {
        await pagosServiciosRegistradosController.pagosServiciosRegistradosForm(data);
    }

    async pagosServiciosEventuales(data) {
        await pagosServiciosEventualesController.pagosServiciosEventualesForm(data);
    }

    async pagosMisTarjetas(data) {
        await pagosMisTarjetasController.pagosMisTarjetasForm(data);
    }

    async pagosTarjetasRegistradas(data) {
        await pagosTarjetasRegistradasController.pagosTarjetasRegistradasForm(data);
    }

    async pagosTarjetasEventuales(data) {
        await pagosTarjetasEventualesController.pagosTarjetasEventualesForm(data);
    }
}

export default new PagosNavigation();
