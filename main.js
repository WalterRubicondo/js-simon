// La pagina espone 5 numeri generati casualmente.
 // Da li parte un timer di 30 secondi.
 // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
 // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 $(document).ready(function () {

   var numberPcArray = [];
   var numeriUtente = [];
   var numeri = 50;

   numberPcArray = createNumber(numberPcArray, numeri);
   console.log(numberPcArray);

   function createNumber(array, max) {
     while (array.length < 5) {
       var appoggio = numberRandomGenerator(1, numeri);
       // I numeri non possono essere duplicati.
       if (!array.includes(appoggio)) {
         array.push(appoggio);
       }
     }
     return array;
   }


   $("#number-pc").text("Memorizza i seguenti numeri " + numberPcArray);

   setTimeout(function(){
     var numeriDom = $("#number-pc").text(numberPcArray);
     numeriDom.hide();
   }, 5000); // 30000 per i 30 secondi

   setTimeout(function(){
     for (var i = 0; i < 5; i++) {
       var richiestaNum = parseInt(prompt("Che numeri hai visto?"));
       if (numberPcArray.includes(richiestaNum)) {
        numeriUtente.push(richiestaNum);
        }
      $("#risultato").text("Hai indovinato " + numeriUtente.length + " numeri! I numeri indovinati sono: " + numeriUtente + ". I numeri erano " + numberPcArray);
    }
}, 10000); // 60000 per i 30 secondi

 })






 function numberRandomGenerator(min, max) {
   return Math.floor(Math.random() * (max - min -1 )) + min;
 }
