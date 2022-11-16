const valorTicket = 200;
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;
let nombre = document.getElementById('tickets_nombre');
let apellido = document.getElementById('tikets_apellido');
let mail = document.getElementById('mail');
let cantidadTickets = document.getElementById('cantidadTickets');
let categoria = document.getElementById('categoriaSelect'); 
let totalPago = document.getElementById('totalPago');

function TotalAPpagar(){
buttom_send.addEventListener('click', function(){ 
    console.log('tickets_nombre.value')
    if (nombre.value =='') alert('El Nombre no puede estar vacío');
    nombre.classList.add("is-invalid");
    return; });

buttom_send.addEventListener('click', function(){ 
    console.log('tikets_apellido.value')
    if (apellido.value =='') 
    apellido.classList.add("is-invalid"); 
    apellido.focus();
    alert('El Apellido no puede estar vacío');
    return;
    });

buttom_send.addEventListener('click', function(){ 
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);}  
    console.log('mail')
    if (mail.value =='') alert('Debe colocar una dirección de Email');});
        mail.focus();
        alert("La dirección de email es incorrecta.");

    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        alert("Por favor, ingresá la cantidad de tickets.");
        return;
    }

    if (categoria.value == "") {
        categoria.classList.add("is-invalid");
        categoria.focus();
        alert("Por favor, seleccioná una categoría");
        return;
    }
let totalValorTickets = (cantidadTickets.value) * valorTicket;

switch (categoria.value) 
{ 
    case "n":
    totalPago.innerHTML = (totalValorTickets = totalValorTickets);
    break;
      
    case"e":
    totalPago.innerHTML = (totalValorTickets= (totalValorTickets - (descuentoEstudiante/100*totalValorTickets)))
    break

    case"t":
    totalPago.innerHTML = (totalValorTickets = (totalValorTickets-(descuentoTrainee/100*totalValorTickets)))
    break;
    
    case"j":
    totalPago.innerHTML = (totalValorTickets =(totalValorTickets-(descuentoJunior/100*totalValorTickets)))
    break;
    default:
    break;
 }    
}

buttom_send.addEventListener('click', TotalAPpagar);


            

