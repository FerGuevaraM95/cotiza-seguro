
// Constructor para seguro
function Insurance(region, year, type) {
    this.region = region;
    this.year = year;
    this.type = type;
}

Insurance.prototype.insuranceQuote = function() {
    console.log(this.region);
    console.log(this.year);
    console.log(this.type);

    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */

    let quantity;
    const base = 2000;

    switch (this.region) {
        case "1":
            quantity = base * 1.15;
            break;
        case "2":
            quantity = base * 1.05;
            break;
        case "3":
            quantity = base * 1.35;
            break;
    }

    const difference = new Date().getFullYear() - this.year;
    // Cada año de diferencia hay que reducir 3% el valor del seguro
    quantity -= ((difference * 3) * quantity) / 100;
    /*
        si el seguro es basico se multiplica por 30%
    */
   if(this.type === 'basic') {
       quantity *= 1.30;
   } else {
       quantity *= 1.50;
   }

    return quantity;
}

  // Toda la interfaz
  function UI() {};

UI.prototype.showMessage = function(message, messageType) {
    const div = document.createElement('div');

    if(messageType === 'error') {
        div.classList.add('message', 'error');
    } else {
        div.classList.add('message', 'right');
    }

    div.innerHTML = `${message}`
    form.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(function() {
        document.querySelector('.message').remove();
    }, 3000);
}




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
    const interfaz = new UI();

    // Revisamos que los campos no esten vacios
    if (selectedRegion === '' || selectedYear === '' || type === '') {
        // Interfaz inprimiendo un error
            interfaz.showMessage('Faltan datos, revisa el formulario y prueba de nuevo', 'error');
    } else {
        // Instancia seguro y mostrar interfaz
        const insurance = new Insurance(selectedRegion, selectedYear, type);
        // cotizar el seguro
        const quantity = insurance.insuranceQuote();
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