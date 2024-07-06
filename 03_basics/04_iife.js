// Immediately invoked function xpression IIFE
//? to avoid the pollution from global scope and avoid that and execute the function quickly

// named iife
(function chai() {
  console.log("DB Connected");
})();

//unnamed iife

((name) => {
  console.log(`DB connected ${name}`);
})("sahil");
