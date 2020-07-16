const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
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
console.log(somaIdades);