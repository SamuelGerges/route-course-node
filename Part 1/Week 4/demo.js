let x = 10 ;
let y = 20 ;

function sum (a, b) {
    return a + b;
}


// ES 5

// // module.exports = x ;
// // module.exports = y ;




// module.exports = {x,y, sum}; // his will export an object with properties x, y, and sum


// ES 6 



// export let x = 10 ;
// export let y = 20 ;

// export function sum (a, b) {
//     return a + b;
// }


// export default x; // This will export only x

export { x, y, sum }; // This will export an object with properties x, y, and sum
