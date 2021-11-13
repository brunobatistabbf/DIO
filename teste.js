

var j = {
    name: "bruno",
    sobrenome: "batista",
    idade: 17,

    maior: function() {
        if (this.idade < 18) {
           // alert("Menor de idade!");
        }
    }
  
};

console.log(j)
j.maior();

