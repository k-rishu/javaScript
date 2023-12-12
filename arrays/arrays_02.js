const marval_heros = ["Thor", "Iron Man", "Hulk"]

const dc_heros = ["BatMan", "Wonder Women", "Superman"];

// marval_heros.push(dc_heros);
// console.log(marval_heros);
// console.log(marval_heros[3][1]);
marval_heros.concat(dc_heros);      // The concat method doesn't change the original array, you need to reassign it.

// const allHeros = marval_heros.concat(dc_heros);

const all_new_heros = [...marval_heros, ...dc_heros];
// console.log(allHeros);
// console.log(all_new_heros);

const another_array = [1, 2, 3, 4,[5, 6, 7, [8 , 9]]];
console.log(another_array);

const pure_array = another_array.flat(Infinity);
console.log(pure_array);


