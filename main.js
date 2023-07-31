

// Exercise 1
// Viết chương trình Javascript để hiển thị ngày giờ hiện tại theo định dạng sau : 
// Sample output: Today is: Tuesday ;
// Current time is: 10 PM: 30 : 38

var today = new Date ();
    var day = today.getDay();
    var dayList = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednsday',
        'Thurday',
        'Friday',
        'Saturday'
    ];
    
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today. getSeconds();

    var prepand = (hour > 12)? " PM " : " AM "; // Prepand: chuẩn bị trước
    hour = (hour >= 12) ? `${hour - 12}` : hour
    hour = (hour < 10)? `0${hour}` : `${hour}`;
    
    minute = (minute < 10)? `0${minute}`:minute;
    second = (second < 10)?`0${second}`:second;

    if(hour === 0 && prepand === ' PM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Noon'// buổi trưa;
        }else {
            hour = 12;
            prepand = ' PM ';
        }
    } else if (hour === 0 && prepand === ' AM ') {
        if(minute === 0 && second === 0) {
            hour = 12;
            prepand = " Midnight";
        } else {
            hour = 12;
            prepand = ' AM ';
        }
    }

    const getTodayElemrnt = document.querySelector(".today")
    const getTimeElemnt =document.querySelector(".time")
    getTodayElemrnt.innerHTML = `Today is: ${dayList[day]}.`;
    getTimeElemnt.innerHTML = `Current Time: ${prepand}${hour}:${minute}:${second}`;


//Exercises 2:  Viết chương trình JavaScript để in nội dung cửa sổ hiện tại

const printCurrentPage = function () {
    window.print();
}

// Exercises 3: In ra số ngày tháng hiện tại theo format cho trước bằng Javascript;
// format: mm-dd-year / mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const getCurrentDateElement1 = document.querySelector('.current-date-format1');
const getCurrentDateElement2 = document.querySelector('.current-date-format2')
const getCurrentDateElement3 = document.querySelector('.current-date-format3')


var currentYear = today.getFullYear();
var currentMonth = today.getMonth() + 1;
var currentDay = today.getDate();
currentMonth = (currentMonth < 10) ? `0${currentMonth}`:`${currentMonth}`;
currentDay = (currentDay < 10) ? `0${currentDay}`:`${currentDay}`;

getCurrentDateElement1.innerHTML = `${currentDay}-${currentMonth}-${currentYear}`;
getCurrentDateElement2.innerHTML = `${currentDay}/${currentMonth}/${currentYear}`;
getCurrentDateElement3.innerHTML = `${currentYear}/${currentMonth}/${currentDay}`;

// Exercises 4: Viết chương trình JavaScript để tìm diện tích của 1 tam giác có 3 cạnh là 5,6,7.

const acreageResultElement = document.querySelector('.acreage-result');
var side1 = 5;
var side2 = 6;
var side3 = 7;

var primeter = (side1 + side2 + side3)/2; // 1 nửa của chu vi;
var acreage = (Math.sqrt(primeter*(primeter-side1)*(primeter-side2)*(primeter-side3))).toFixed(3)

acreageResultElement.innerHTML = `Result = : ${acreage}`;

// Exercises 5: Viết chương trình javascript để xoay chuỗi 'W3resource' theo đúng hướng.
// Note: Có thể thực hiện bằng cách loại bỏ 1 chữ cái khỏi đầu chuỗi và gắn nó vào phía trước.

const runWord = 'W3resource' ;

const animateString = function(target) {
    var idElement = document.querySelector('#target')
    var textNote = idElement.childNodes[0]; // assuming no other children
    var text = textNote.data;

    setInterval(function() {
            text = text[text.length -1] + text.substring(0,text.length -1);
            textNote.data = text;
        },150)
}

setTimeout(animateString(),1000) // コメントアウトしたら、ずっと動きになります。


// Exercises 6: Viết chương trình Javascript để xác định xem 1 năm đã cho có phải là năm nhuận
// trong lịch Gregorian không? 

const leapYear = function(year) {
    if(year % 100 === 0 && year % 400 === 0 && year % 4 ===0) {
        return alert('Đây là năm nhuận')
    } else {
        return alert('Đây không phải là năm nhuận')
    }
};

// leapYear(2000); // コメントアウトしたら、アラートのポップアップが表示される。

// Exercises 7: Viết chương trình javascript để tìm hiểu xem ngày 1 tháng 1 có phải là chủ nhật trong khoảng
// thời gian từ năm 2014 đến năm 2050 không ?

    for(var year = 2014; year <= 2050; year++) {
        var date = new Date(year,0,1)
        if(date.getDay() === 0) {
           var output = `1st January is being a Sunday ${year}`
        //    console.log(output) //=> コメントアウトしたら、結果が返される。
        }
    }

    // Câu hỏi: Giả sử mình muốn in ra 1 list danh sách thì mình phải in trong vòng for à ? 


// Exercise 8: Viết chương trình Javascript trong đó chương trình lấy 1 số nguyên 
//ngẫu nhiên trong khoảng từ 1 đến 10, Sau đó người dùng được nhắc nhập 1 số dự đoán.
// Chương trình sẽ hiển thị thông báo "Làm tốt lắm" nếu đầu vào khớp với số dự đoán nếu không thì 
// sẽ hiển thị 'Không khớp'.

const number = Math.ceil(Math.random()*10);
const getGuessANumberElement= document.querySelector(".guessANumber");

// const getNumber = prompt('Guess the number between 1 and 10 inclusive');

// if (getNumber == number){
//     getGuessANumberElement.innerHTML = 'Good work';
// }else {
//     getGuessANumberElement.innerHTML ='Not matched, the number was '+ getNumber;
// }// コメントアウトしたら、prompt element　が表示される。

// Exercise 9: Tính số ngày còn lại cho đến giáng sinh sắp tới!


const getChristmasRemainingDays = document.querySelector('.christmasRemainingDays');

const chrismasDay = new Date(today.getFullYear() ,11,25);

if(today.getMonth() == 11 && today.getDate() > 25) {
    chrismasDay.setFullYear(chrismas.getFullYear + 1);
} else {
    var oneDay = 1000*60*60*24;
    Math.ceil((chrismasDay.getTime() - today.getTime())/ oneDay);
}
getChristmasRemainingDays.innerHTML = `${Math.ceil((chrismasDay.getTime() - today.getTime())/ oneDay)} days left until chrismas!`


// Exercise 10: Viết chương trình javascript để tính phép nhân và chia 2 số (Note:2 số này được nhập bởi người dùng)

const multiplyBy = function () {
    var getFirstNumber = document.querySelector('#firstNumber').value;
    var getSecondNumber = document.querySelector('#secondNumber').value;
    var getResultElement = document.querySelector('#result');
    var result = getFirstNumber * getSecondNumber;
    return getResultElement.innerHTML = result ;

}

const divideBy = function() {
    var getFirstNumber = document.querySelector('#firstNumber').value;
    var getSecondNumber = document.querySelector('#secondNumber').value;
    var getResultElement = document.querySelector('#result');
    var result = getFirstNumber / getSecondNumber;
    return getResultElement.innerHTML = result ;

}

// Exercise 11: Viết chương trình Javascript để chuyển đổi nhiệt độ từ độ C sáng độ F.
// Công thức [C/5 = (f-32)/9 trong đó c = Nhiệt độ tính bằng độ C và f = nhiệt độ tính bằng độ F]
// Output dự kiến: 
// 60°C là 140°F; 
// 45°F là 7,222222222222222°C ; 

// Công thức chuyển đổi từ độ F => C : C = (5(f-32))/9
// Công thức chuyển từ độ C => F : F = (9C + (32*5))/5

const getFahrenheit = document.querySelector('#fahrenheit') // fahrenheit là độ F 
const getCelsius = document.querySelector('#celsius') // celsius là độ C

const celsiusToFahrenheit = function(celsius) {
    var cTemp = celsius;
    var cToFahr = cTemp *9/5 +32
    var message =  cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    getFahrenheit.innerHTML = message;
}


const fahrenheitToCelsius = function(fahrenheit) {
    var fTemp = fahrenheit; 
    var fahrenheitToCelsius = (fTemp - 32) * 5 / 9;
    var message = fTemp + '\xB0F is ' + fahrenheitToCelsius + '\xB0C.' ;
    getCelsius.innerHTML = message;
}

celsiusToFahrenheit(60)
fahrenheitToCelsius(45)

// Exercise 12: Viết chương trình javaScript để lấy URL của trang web(trang tải)

const getURLElement = document.querySelector('.exercius12Result');

const getURL = function() {
 getURLPage = document.URL;
 return getURLElement.innerHTML = getURLPage;
}


// Exercise 13: Viết bài tập javascript để tạo 1 biến sử dụng tên do người dùng đặt.


const varName = '';
const n = 120;
this[varName] = n;
// console.log(this[varName])



// Exercise 14: Viết bài tập javascript để lấy phần mở rộng tên tệp(Phần sau dấu chấm).


const fileName = "system.php";

// console.log(fileName.split(".").pop())

const fileName2 = "abc.js";

// console.log(fileName2.split(".").pop())

// Exercise 15: Viết chương trình javascript để lấy hiệu giữa 1 số đã cho và 13, 
// nếu số lớn hơn 13, trả về gấp đôi hiệu tuyệt đối.

function difference(n) {
    if(n <= 13) {
        return 13 -n;
    } else {
        return (n - 13)*2;
    }
}

// console.log(difference(15))


// Exercise 16: Viết chương trình javascript để tính tổng của 2 số nguyên đã cho. 
// Nếu 2 giá trị giống nhau thì trả về gấp 3 lần tổng của chúng. 


const sumResult = function(a,b) {
    if(a == b) {
        return (a + b)*3;
    } else {
        return a + b;
    }
}

// console.log(sumResult(2,5))

// Exercise 17: Viết chương trình javascript để tính chênh lệch tuyệt đối giữa 1 số đã chỉ định và 19.
// Trả về gấp 3 lần chênh lệch tuyệt đối nếu số đã chỉ định lớn hơn 19.

function result17 (a) {
    if(a > 19) {
        return (19 - a) *3
    } else {
        return Math.abs((a - 19));
    }
}

// console.log(result17(5))

// Exercise 18: Viết chương trình javascript để kiểm tra 1 cặp số và trả về true nếu 1 trong các số là 50,
// hoặc nếu tổng của chúng là 50.

const getExercise18ResultElement = document.querySelector(".exercise18Result");

function numberCheck (a,b) {
    if ( a == 50 || b == 50 || a + b == 50) {
        return true
    } else {
        return false
    }
}

numberCheck(22,28)

getExercise18ResultElement.innerHTML = numberCheck(20,28);

// Exercise 19: Viết chương trình Javascript để kiểm tra xem 1 số nguyên đã nằm trong khoảng 20 của 100 hay 400;

const getExercise19Result = document.querySelector('.exercise19Result');
const integerCheck = function (value) {
    if(Number.isInteger(value) && value + 20 <= 100 && value >= 20 ) {
        return `${value} is within 20 of 100`;
    }else if(Number.isInteger(value) && value + 20 <= 400 && value >= 100 ){
        return `${value} is within 100 of 400`;
    } else {
        return false
    }
}


getExercise19Result.innerHTML = integerCheck(150);

// Exercise 20: Viết chương trình javascript để kiểm tra 2 số nguyên đã cho xem 1 số nguyên dương và 1 số nguyên âm.

const getExercise20Element = document.querySelector(".exercise20Result");

function positiveAndNegativeCheck(x,y) {
    if(x > 0 && y < 0 || x < 0 && y > 0) {
        return true;
    } else {
        return false;
    }
}

getExercise20Element.innerHTML = positiveAndNegativeCheck(5,-1)



// Exercise 21: Viết chương trình javascript để tạo 1 chuỗi khác bằng các thêm "Py" vào trước chuối đã cho,
// Nếu chuỗi đã cho bắt đầu bằng "Py" thì hãy trả về chuỗi gốc

// ý tưởng: check nếu có Py là 2 chữ đầu thì trả về chuỗi gốc. Nếu không thì thêm "Py" vào rồi trả về chuỗi mới.

const getExercies21Element = document.querySelector('.exercise21Result');

const pyString = function (element) {
    if(element.slice(0,2) === "Py") {
        return element
    }else {
        return `Py${element}`
    }
}


getExercies21Element.innerHTML = pyString("exercise21Result");


// Exercies 22: Viết chương trình javascript để xoá 1 ký tự ở vị trí đã chỉ định trong chuỗi đã cho 
// và trả về chuỗi đã sửa đổi. 

const getExercies22Element = document.querySelector('.exercise22Result');

function remove_character(string, characterPosition) {
    part1 = string.substring(0,characterPosition);
    part2 = string.substring(characterPosition + 1, string.length);
    return part1 + part2;
}

getExercies22Element.innerHTML = remove_character("striing", 3) // string đã được cắt đi chữ i và trả về "String"


// Exercise 23: Viết chương trình javascript để tạo 1 chuỗi mới từ một chuỗi đã cho bằng cách thay đổi vị trí
// của ký tự đầu và ký tự cuối. Độ dài của chuỗi phải lớn hơn hoặc bằng 1.

const getExercies23ResultElement = document.querySelector(".exercies23Result");








