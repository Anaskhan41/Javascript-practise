// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log("DB CONNECTEd");
})();

(function aurcode() {
    console.log (`DB CONNECTED TWO`)
})();

(() => {
    // unnamed IIFE 
    console.log (`DB CONNECTED THREE`)
})();

((name) => {
    console.log (`DB CONNECTED FOUR ${name}`)
})("Anas");