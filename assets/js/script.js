          $("a").ready(function(){

               $("a").on('click', function(event) {

               if (this.hash !== "") {

               event.preventDefault();

               var hash = this.hash;

               $('html, body').animate({
               scrollTop: $(hash).offset().top
               }, 800, function(){
                    window.location.hash = hash;
});
}
});
});

//tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Modal buton
//var myModal = document.getElementById('myModal')
//var myInput = document.getElementById('myInput')
//myModal.addEventListener('shown.bs.modal', function () {
  //myInput.focus()
//})



//alert Comprado
var input = document.getElementById("Input")
input.addEventListener("click", alertPorClick );

function alertPorClick(){
  alert("comprado Full Day Torres del Paine")
};
var inputdos = document.getElementById("Input2")
inputdos.addEventListener("click", alertPorClickdos );

function alertPorClickdos(){
  alert("comprado San pedro de Atacama")
};
var inputtres = document.getElementById("Input3")
inputtres.addEventListener("click", alertPorClicktres );

function alertPorClicktres(){
  alert("comprado San Pedro de Atacama-Salar")
};
var inputcuatro = document.getElementById("Input4")
inputcuatro.addEventListener("click", alertPorClickcuatro );

function alertPorClickcuatro(){
  alert("comprado Selva valdiviana")
};


// scrollReveal
ScrollReveal().reveal('.headline',{ delay: 500});
ScrollReveal().reveal('.headline1',{ delay: 400});
