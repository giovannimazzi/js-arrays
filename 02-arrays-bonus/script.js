const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE
console.table(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
let temp = [];
for (let i = 0; i < teachers.length; i++) {
  temp.unshift(teachers[i]);
}
const reversedTeachers = temp;
console.log(`1) `, reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
temp = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    temp.push(teachers[i]);
  }
}
const longNames = temp;
console.log(`2) `, longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf("Ed"), 1);
console.log(`3) `, teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
temp = false;
for (let i = 0; i < teachers.length && !temp; i++) {
  temp = teachers[i] === "Fabio";
}
const isFabioPresent = temp;
console.log(`4) isFabioPresent: ${isFabioPresent}`);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
temp = "";
for (let i = 0; i < teachers.length; i++) {
  temp += teachers[i];
  if (i + 1 !== teachers.length) {
    temp += ",";
  }
}
const teachersString = temp;

//* Metodo alternativo, più veloce:
/* const teachersString = `${teachers}`; */
//************************************** */

console.log(`5) teachersString: ${teachersString}`);
