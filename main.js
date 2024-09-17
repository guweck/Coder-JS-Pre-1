// Función para calcular el total con o sin cuotas
function calcularTotal() {
    // Precios de los productos
    const precioProducto1 = 10;
    const precioProducto2 = 20;
    const precioProducto3 = 30;

    // Cantidades seleccionadas
    const cantidadProducto1 = parseInt(document.getElementById('producto1').value) || 0;
    const cantidadProducto2 = parseInt(document.getElementById('producto2').value) || 0;
    const cantidadProducto3 = parseInt(document.getElementById('producto3').value) || 0;

    // Calcular el total inicial
    const totalInicial = (cantidadProducto1 * precioProducto1) +
                         (cantidadProducto2 * precioProducto2) +
                         (cantidadProducto3 * precioProducto3);

    // Obtener el método de pago seleccionado
    const metodoPago = document.getElementById('pago').value;

    // Ver si es pago en cuotas o único
    if (metodoPago === "cuotas") {
        // Si es en cuotas, calcular el pago en cuotas con interés
        const numeroCuotas = parseInt(document.getElementById('cuotas').value) || 1;
        const totalConInteres = calcularCuotas(totalInicial, numeroCuotas);

        // Mostrar el total con cuotas
        document.getElementById('total').innerText = `Total en ${numeroCuotas} cuotas: $${totalConInteres.toFixed(2)}`;
    } else {
        // Si es pago único, mostrar el total sin interés
        document.getElementById('total').innerText = `Total: $${totalInicial}`;
    }
}

// Función para calcular el total con interés en cuotas
function calcularCuotas(total, numeroCuotas) {
    const interesMensual = 0.05; // 5% de interés mensual
    let totalConInteres = total;

    // Ciclo para calcular el interés acumulado mes a mes
    for (let i = 1; i <= numeroCuotas; i++) {
        totalConInteres += totalConInteres * interesMensual;
    }

    return totalConInteres;
}

// Mostrar u ocultar el campo de número de cuotas según el método de pago seleccionado
document.getElementById('pago').addEventListener('change', function() {
    const cuotasContainer = document.getElementById('cuotas-container');
    if (this.value === "cuotas") {
        cuotasContainer.style.display = "block";
    } else {
        cuotasContainer.style.display = "none";
    }
});
