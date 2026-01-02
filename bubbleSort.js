function bubbleSort(arr) {
    let swapped
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }
    while (swapped);
}
const arr = [-6, 20, 8, -2, 4];
bubbleSort(arr);
console.log(arr);

//Practive 1 - 02/01/2026
// function bubbleSort(arr) {
//     let flag;
//     do {
//         flag = false;
//         for (let i = 0; i < arr.length - 1; i++) {

//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 flag = true;
//             }
//         }
//     } while (flag);
// }

// const arr = [5, 17, 8, -5, 4]
// bubbleSort(arr);
// console.log(arr);