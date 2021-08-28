const persons = [
	{
		_id: 1,
		name: 'Abelardo',
		age: 24,
	},
	{
		_id: 2,
		name: 'Jaden',
		age: 45,
	},
	{
		_id: 3,
		name: 'Oceane',
		age: 33,
	},
]
/* 1 метод */
/* console.log(persons.some(person => person.name === 'Jaden')) */

/* 2 метод */
/* const totalAge = persons.reduce((acc, person) => acc + person.age, 0)
console.log(totalAge) */

/* 3 метод */
/* const personNames = persons.map((person, idx) => `${idx} ${person.name}`)
console.log(personNames) */

/* 4 и 5 методы */
// const personAges = persons.forEach(() => {
// 	const current = persons.find(person => person.age === 45)
// 	return current
// })
// console.log(personAges)

/* 6 метод */
const array = [1, 2, 3, 4, 5, [1, [1, 3], [5, 6], 3, 4], [8, 9]]
console.log(array.flat(2))
