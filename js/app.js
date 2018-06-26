
// Constructor para seguro
function insurance(region, year, type) {
    this.region = region;
    this.year = year;
    this.type = type;
}


// Toda la interfaz
function UI() {}




// EventListener
const form = document.querySelector('#insuranceQuote');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Leer la región seleccionada del select
    const region = document.querySelector('#region');
    const selectedRegion = region.options[region.selectedIndex].value;
    // Leer el año seleccionado del select
    const year = document.querySelector('#year');
    const selectedYear = year.options[year.selectedIndex].value;
    // Leer el valor del botón radio
    const type = document.querySelector('input[name="type"]:checked').value;

    // Crear instancia de interfaz
    const userInterfaz = new UI();

    // Revisamos que los campos no esten vacios
    if (selectedRegion === '' || selectedYear === '' || type === '') {
        // Interfaz inprimiendo un error
        console.log('Faltan datos');
    } else {
        // Instancia seguro y mostrar interfaz
        console.log('Todo correcto');
    }
});


const max = new Date().getFullYear(),
    min = max - 20;

const selectYears = document.querySelector('#year');
for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectYears.appendChild(option);
}