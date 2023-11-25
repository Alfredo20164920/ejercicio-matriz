/*
     0  1  2  3
0 - [0, 1, 1, 2],
1 - [1, 5, 0, 0],   
2 - [2, 0, 3, 3]
3 - [2, 0, 3, 3]

gmondragon@sisu.mx
*/

const matrix = [
	[0, 1, 1, 2],
	[1, 5, 1, 0],
	[2, 0, 3, 3],
];

// const matrix = [
//     [0],
// 	[0, 1, 1, 2, 5, 0, 0], 
// 	[1, 5, 1, 0], 
// 	[2, 0, 3, 3, 1, 5], 
// 	[2, 0, 3, 3, 1, 5], 
// 	[0, 0, 0, 0, 0, 0, 5],
// ];

let resultado = 0;

let jump = {}

matrix.forEach((row, i) => {
    row.forEach((value, j) => {
        if(value === 0) {
            if(!jump.j){
                jump[j] = j;
            }
        }

        if(!matrix[i][jump[j]]) {
            resultado += matrix[i][j];
        }
    })
})

// for (let i = 0; i < matrix.length; i++) {
// 	for (let j = 0; j < matrix[i].length; j++) {
//         if(matrix[i][j] === 0 && matrix[i + 1]) {
//             if(!jump.j){
//                 jump[j] = j;
//             }
//         }

//         if(!matrix[i][jump[j]]) {
//             resultado += matrix[i][j];
//         }

//         // if( matrix[i - 1] && matrix[i - 1][j] !== 0) {
//         //     resultado += matrix[i][j];
//         // }
// 	}
// }

console.log(resultado);

