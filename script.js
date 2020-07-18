const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'bolinha',
        type: 'dog',
        age: 13
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }

];

const eMenorQueCinco = (numero) => {
    return numero < 5
}

const newPets = pets.filter(({ age }) => eMenorQueCinco(age))
// console.log(newPets);

//Array.prototype.map()

const petNames = pets.map((pets) => {
    return pets.type
})
// console.log(petNames)

const somaIdades = pets.reduce((total, pets) => {
    return {
        totalAges: total.totalAges + pets.age,
        totalAges2: total.totalAges2 + pets.age
    }
}, { totalAges: 0, totalAges2: 10 })
// console.log(somaIdades);

const somaIdadesDog = pets.reduce((total, pets) => {
    if (pets.type == 'fish')
        return total + pets.age
    return total
}, 0)
//  console.log(somaIdadesDog);

// exercicio ==========================================
let num01 = 9;
let num02 = -3;
let num03 = 5;
let num04 = 3;
let num05 = 8;
let num06 = 0;

arrayNumero = [{valor: num01}, {valor:num02},{valor : num03},{valor : num04},{valor : num05},{valor : num06}];

const totalPos = arrayNumero.filter(({ valor }) => valor >= 0)

// console.log(totalPos.length + ' valores positivos')