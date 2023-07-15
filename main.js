

// Mảng trong javácript


// 1. Tạo mảng
//     - Cách tạo
//     - Sử dụng cách nào? Tại sao ? 
//     - Kiểm tra data type 
// 2. Truy xuất mảng
//     - Độ dài mảng
//     - Lấy phần từ index


// Làm việc với Array

// 1. To String -> chuyển đổi thành string
// 2. Join -> join các phần tử trong mảng
// 3. Pop -> Xoá phần tử cuối mảng
// 4. Push -> Thêm phần tử vào cuối mảng
// 5. shift -> Xoá phần tử đầu mảng
// 6. Unshift -> Thêm phần tử vào đầu mảng
// 7. Splicing -> array.splice(vị trí start, Số phần tử xoá, số phần tử chèn vào);
// 8. concat   -> nối 2 mảng lại với nhau và tạo ra 1 mảng mới. 
// 9. Splicing -> array.slice Cắt element trong mảng nhưng không làm thay đổi độ dài của mảng. 
//






/*
- Math.PI -> trả về số PI (3.14....)
- Math.round() -> trả về tròn số tới giá trị gần nhất (VD: 1.6 -> 2)
- Math.abs() -> trả về số số tuyệt đối của giá trị
- Math.ceil() -> trả về giá trị làm tròn trên của value (VD: 1.2 -> 2)
- Math.floor() -> Trả về giá trị làm tròn dưới value (VD: 1.6 -> 1)
- math.random() -> Trả về giá trị ngẫu nhiên 
- Math.min() -> Trả về giá trị Min
- Math.max() -> Trả về giá trị max
*/

// Lệnh rẽ Nhánh, toán tử 3 ngôi


/*
Vòng lặp - Loop

1. for - Lặp với điều kiện đúng.
2. for/in - lặp qua key của các object.
3.for/of - Lặp qua value của đối tượng;
4. While - Lặp khi điều kiện đúng.
5. do/while - lặp ít nhất 1 lần, sau đó lặp lại khi điều kiện đó đúng

*/

/* Cấu trúc của vòng for - ứng dụng

VD: Tính tổng các phần tử trong 1 mảng cho trước
function getTotal (value) {
    total = 0;
    for (let i = 0; i < value.length; i++) {
        total = total + value[i];
    }

    return total;
}

console.log(getTotal([1,2,3,4,5,6])) => // kết quả = 21;


*/


// var myArray = [
//     'Javascript',
//     'PHP',
//     'Java',
//     'Dart'
// ]

// const arrayLength = myArray.length;

// for (var i = 0; i < arrayLength; i++) {
//     console.log(myArray[i])
// };

// var orders = [
//     {
//         name: 'Khoá học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name:'Khoá học JavaScript Pro',
//         price: 2500000
//     },
//     {
//         name:'Khoá học React Pro',
//         price: 3200000
//     },
// ]


// console.log(orders[0].price)


// const getTotal = function (value) {
//     let ordersLength = value.length;

//     let total = 0;
//     for(let i = 0; i < ordersLength; i++) {
//         total = total + value[i].price
//     }
//     return total;
// }

// console.log(getTotal(orders))

// const getDemoElement = document.querySelector('#demo');
// getDemoElement.innerHTML = getTotal(orders);


// const myInfo = {
//     // name: 'hung do',
//     // age: 30,
//     // address: 'Ha noi,Viet Nam'
// }

// const printDemo = function (value) {
//     const getElementDemo = document.querySelector('#demo')

//     for(var key in value) {
//         key + `: ${myInfo[key]}`
//     }
//     return getElementDemo.innerHTML = key + `: ${myInfo[key]}`;
// }


// printDemo(myInfo)


// for (let key in myInfo) {
//     console.log(key + `: ${myInfo[key]}`)
//     const getElementDemo = document.querySelector('#demo')
//     getElementDemo.innerHTML = key + `: ${myInfo[key]}`
// }


// const languages = [
//     'JavaScript',
//     'PHP',
//     'Ruby',
//     'Java'
// ]

// for(let key in languages) {
//     console.log(languages[key])
// }

// Trả về 1 dãy số ngẫu nhiên có length phần tử
// const getRandomNumber = function (min,max,length) {
//     const result = [];
//     for (let i = 0; i <= length ; i++) {
//        var output = Math.floor(Math.random()*(max-min) + min);
//         result.push(output)
//     }
//     return result;
// }

// console.log(getRandomNumber(1,10,10))

// Trả về tổng giá trị các phần tử của mảng
// const getTotal = function(array) {
//     let sum = 0;
//     let arrayLength = array.length
//     for(let i = 0; i < arrayLength; i++) {
//         sum = sum + array[i];
//     }
//     return sum;
// }

// console.log(getTotal([1,2,3]))


// Tính tổng giá trị đơn hàng
// var orders = [
//     {
//     name: 'Khoá học HTML - CSS Pro',
//     price: 300000
//     },
//     {
//     name: 'Khoá học Javascript Pro',
//     price: 250000
//     },

//     {
//     name: 'Khoá học React Pro',
//     price:  320000
//     }       
// ]

// const getTotal = function(value) {
//     let result = 0;
//     for(let i = 0; i < value.length; i++) {
//         let valuePrice = value[i].price; 
//         result = result + valuePrice
//     }
//     return result
// }

// const getElementDemo = document.querySelector('#demo');
// getElementDemo.innerHTML = getTotal(orders);

// console.log(getTotal(orders))


//  Vòng lặp for/in
// const myInfo = {
//         name:'Hung Do',
//         age: 30
// }

// for( let key in myInfo) {
//     console.log(`Thuộc tính ${key} có giá trị ${myInfo[key]}`)
// }

// console.log(myInfo)

// const run = function (object) {
//     const output = [];
//     for(key in object) {
//         result = `Thuộc tính ${key} có giá trị ${object[key]}`
//         output.push(result)
//     }
//     return output
// }

// console.log(run({ name: 'Nguyen Van A', age: 16 }))

// const languages = [
//     'Javascript',
//     'PHP',
//     'Java'
// ];

// for (var value of languages) {
//     console.log(value)
// }

// var myInfo = {
//     name: 'Hung Do',
//     age: 18
// }
// Object.values(myInfo)

// for (var value of Object.values(myInfo)) {
//     console.log(value)
// }

// Vòng lặp while/ while loop

// var i = 0; 
// var isSuccess = false;

// do {
//     i++;
// // console.log('Nap the lan ' + i)
//     if(true) {
//         console.log('Nap the lan ' + i)
//     }
// } while ( !isSuccess && i <= 3 )


// let i = 0 ;

// while (i < 10) {
//     i++
//     console.log(i)
// }


// let i = 0;
// let isSuccess = false;

// do {
//     i++;
//     console.log('Nap the lan' + i)

//     if (true) {
//         isSuccess = true;
//     }
// } while (i < 3 && !isSuccess);


// Break and continue in loop

// for (let i = 0; i < 10; i++) {
//     if (i % 2 !=0 ) {
//         continue;
//     }
//     console.log(i)
// }


// Vòng lặp lồng nhau / Nested loop

// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
//     for(let j = 0; j < myArray[i].length; j++ ) {
//         console.log(myArray[i][j])
//     }
// };

// for (var i =100; i > 0 ; i -= 5) {
//     console.log(i)
// }

// Đệ quy là gì? Học về đệ quy . 

// var array = ['a','b','c','a','b','c'];

// function unique (arr) {
//     var newArray = [];
//     for(var i = 0; i < arr.length; i++) {
//         if(newArray.indexOf(arr[i]) === -1) {
//             newArray.push(arr[i])
//         }
//     }
//     return newArray;
// } 

// console.log(unique(array))

// function unique(arr) {
//     var formArr = arr.sort()
//     var newArr = [formArr[0]]
//     for (let i = 1; i < formArr.length; i++) {
//       if (formArr[i] !== formArr[i - 1]) {
//         newArr.push(formArr[i])
//       }
//     }
//     return newArr
//   }
//   console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]))


// var array = ['a','b','c','a','b','c'];

// console.log(array.sort()[0])



// function unique(arr) {
//     var formArr = arr.sort();
//     var newArray = [formArr[0]]
//     for(let i = 1; i < formArr.length; i++) {
//         if(formArr[i] !== formArr[i - 1]) {
//             newArray.push(formArr[i])
//         }
//     }
//     return newArray;
// }

// console.log(unique(array))

// đệ quy

function countDown(number) {
    if(number > 0) {
        console.log(number);
        return countDown(number - 1)
    }
    return number;
}

countDown(10);



