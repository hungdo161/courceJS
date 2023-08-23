

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

function switchCharacter(element) {
    if(element.length <= 1) {
        return element
    } else {
       var middleCharacter = element.substring(1,element.length - 1);
       var fristCharacter = element.charAt(0);
       var lastCharacter = element.charAt(element.length - 1);

       return getExercies23ResultElement.innerHTML =`${element} =>` + `${lastCharacter}${middleCharacter}${fristCharacter}`
    }
}

switchCharacter("garenal");

// Exercise 24: Viết chương trình javascript để tạo một chuỗi khác từ một chuỗi đã cho với
// ký tự đầu tiên của chuỗi đã cho được thêm vào trước và sau.

const getExercies24ResultElement = document.querySelector('.exercies24Result');

function switchCharacter24 (element) {
    var getFirstCharacter = element.charAt(0);
    return getExercies24ResultElement.innerHTML = `${getFirstCharacter}${element}${getFirstCharacter}`
}

switchCharacter24("Swift");



// Exercise 25: Viết chương trình javascript để kiểm tra xem 1 số dương đã cho là bội số của 3 hay 7.

const getExercise25Result = document.querySelector('.exercise25Result');

const multipleCheck = function(element) {
    if( element % 7 == 0 &&  element % 3 == 0) {
        return getExercise25Result.innerHTML = `${element} given number is a multiple of 7 of 3`;
    }else if (element % 7 == 0) {
        return getExercise25Result.innerHTML = `${element} given number is a multiple of 7`;
    } else if (element % 3 == 0) {
        return getExercise25Result.innerHTML = `${element} given number is a multiple of 3`;
    } else {
        return getExercise25Result.innerHTML = `${element} given number is not a multiple of 3 or 7`;
    };
}

multipleCheck(35);


// Exercise 26: Viết chương trình javascript để tạo 1 chuỗi từ 1 chuỗi đã cho. 
// Điều này được thực hiện bằng cách lấy 3 ký tự cuối cùng và thêm chúng vào cả phía trước cộng phía sau. 
// Độ dài chuỗi phải từ 3 trở lên.

const getExercise26Result = document.querySelector(".exercise26Result");

const resultNewString26 = function (element) {
   let getCharacter = element.slice(element.length-3, element.length)
   return getExercise26Result.innerHTML = `${getCharacter}${element}${getCharacter}`;
}

resultNewString26("Swift")


// Exercise 27: Viết chương trình javascript để kiểm tra xem 1 chuỗi có bắt đầu bằng "Java" hay không nếu ngược lại.

const getExercise27Result = document.querySelector(".exercise27Result")


const javaCharactersCheck = function(element) {
     let checkJavaCharacters = element.slice(0,4);
     if(checkJavaCharacters === "Java"){
        return getExercise27Result.innerHTML = true;
     }else {
        return false;
     }
}

javaCharactersCheck("JavaScript");

// Exercise 28: Viết chương trình Javascript để kiểm tra xem ba giá trị số nguyên đã cho có nằm trong phạm vi 
// 50 ~ 99(đã bao gồm) hay không. Trả về true nếu 1 trong số chúng nằm trong phạm vi.

const getExercise28Result = document.querySelector(".exercise28Result");

const checkIntegerNumber = function(a,b) {
    if( 99 - a <= 49 || 99 - b <= 49 ) {
       return getExercise28Result.innerHTML = true; 
    } else {
        return false;
    }
};

checkIntegerNumber(1,50);

// Exercise 29: Viết chương trình javascript để kiểm tra xem ba giá trị số nguyên đã cho có nằm trong phạm vi 50 ~ 99(Đã bao gồm).
// trả về true nếu một hoặc nhiều trong số chúng nằm trong phạm vi đã chỉ định.

const getExercise29Result = document.querySelector(".exercise29Result");

const checkIntegerNumber29 = function(a,b,c) {
    if((a <= 99 && a >= 50) || (b <= 99 && b >= 50) || (c <= 99 && c >= 50)) {
        return getExercise29Result.innerHTML = true;
    } else {
        return getExercise29Result.innerHTML = false;

    }
}

checkIntegerNumber29(1,2,3);

// Exercise 30: Viết chương trình Javascript để kiểm tra xem một chuỗi "Script" có xuất hiện ở vị trí thứ 5 (index 4)
// trong 1 chuỗi đã cho hay không. Nếu "Script" xuất hiện trong chuỗi, trả lại chuỗi không có "Script" nếu không trả lại chuỗi gốc.

const getExercise30Result = document.querySelector('.exercise30Result');

const checkScript = function(element) {
    if ( element.length < 6) {
        return getExercise30Result.innerHTML = element;
    } else if (element.substring(10,4) == "Script") {
        return getExercise30Result.innerHTML =  element.substring(4,10);
    } else {
        return getExercise30Result.innerHTML = element;
    }
}

checkScript("javaScript");
checkScript("coffeeScript");

//console.log(checkScript("javaScript"));

// Exercise 31: Viết chương trình Javascipt để tìm số lớn nhất trong ba số nguyên đã cho.

const getExercise31Result = document.querySelector(".exercise31Result");

const filterLargestNumber = function(a,b,c) {
    if(a > b && a > c) {
        return getExercise31Result.innerHTML = a;
    }else if (b > a && b > c ) {
        return getExercise31Result.innerHTML = b;
    } else if(c > a && c > b) {
        return getExercise31Result.innerHTML = c;
    }
}

filterLargestNumber(5,9,7);

// Exercise 32: Viết chương trình javaScript để tìm giá trị gần nhất với 100 từ hai giá trị số.

const getExercise32Result = document.querySelector(".exercise32Result");

const closestValue = function(a,b) {
    if (Math.abs(100-a) < Math.abs(100 - b)) {
        return getExercise32Result.innerHTML = a;
    } else {
        return getExercise32Result.innerHTML = b;
    }

}

closestValue(500,170)

// Exercise 33: Viết chương trình javascript để kiểm tra xem hai số có nằm trong khoảng 40~60,
// 70 ~ 100 hay không ? 

const getExercise33Result = document.querySelector(".exercise33Result");


const checkNumberRange = function (a,b) {
    if((40 <= a && a <= 60) && ( 70 <= b && b <= 100)){
        return getExercise33Result.innerHTML = true;
    }else if ((40 <= b && b <= 60) && ( 70 <= a && a <= 100)) {
        return getExercise33Result.innerHTML = true;
    } else {
        return getExercise33Result.innerHTML = false;
    }
};

checkNumberRange(40,40)

// Exercise 34: Viết chương trình javascript để tìm số lớn nhất trong hai số nguyên dương đã cho.
// Hai số nằm trong khoảng 40 ~ 60.

const getExercise34Result = document.querySelector(".exercise34Result");

const checkLargestValue = function (a ,b) {
    if ( (40 <= b && b <= 60) && (40 <= a && a <= 60) ) {
        if( a > b) {
            return getExercise34Result.innerHTML = `${a} meet the requirement.`;
        } else if(a < b) {
            return getExercise34Result.innerHTML = `${b} meet the requirement.`;
        }else if (a == b) {
            return getExercise34Result.innerHTML = `To numbers is equal.`;
        }
    } else{
        return getExercise34Result.innerHTML = `${a} of ${b} do not meet the requirements.`;
    }
}

checkLargestValue(40,50);


// Exercise 35: Viết chương trình kiểm tra xem 1 ký tự xác định có tồn tại giữa vị trí thứ 2 và thứ 4  
// trong 1 chuỗi đã cho hay không ? 

const getExercise35Result = document.querySelector(".exercise35Result");

const checkChar = function (str1,char) {
    ctr = 0;
    for (let i = 0; i < str1.length; i++ ) {
        if((str1.charAt(i) == char) && (i >= 1 && i <= 3)) {
            ctr = 1;
            break;
        }
    }
    if (ctr == 1) {
        return true;
    } else {
        return false;
    }

}


// Exercise 36 : Viết chương trình javascript kiểm tra xem chữ số cuối của ba số nguyên dương có giống nhau hay không ? 

const getExercise36Result = document.querySelector(".exercise36Result");

const checkLastDigit = function(x, y, z){
  if ((x > 0) && y > 0 && z > 0){
    return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z% 10);
   } else
    return false;
}


// Exercise 37: Viết chương trình Javascript để tạo 1 chuỗi mới có 3 ký tự đầu tiên viết thường từ 1 chuỗi đã cho.
// Nếu độ dài chuỗi nhỏ hơn 3, hãy chuyển đổi tất cả các ký tự thành chữ hoa.

const getExercise37Result = document.querySelector (".exercise37Result");

const upperAndLower = function(element) {
    if(element.length <= 3) {
        return getExercise37Result.innerHTML = element.toUpperCase();
    } else {
        frontPart = (element.substring(0,3)).toLowerCase();
        lastPart = (element.substring(3,element.length));

        return getExercise37Result.innerHTML = `${frontPart}${lastPart}`;
    }
}

upperAndLower('HUNDO');

// Exercise 38: Viết chương trình Javascript để kiểm tra tổng điểm của một học sinh trong các kỳ thi khác nhau.
// Học sinh sẽ đạt A+ nếu tổng điểm nằm trong khoảng 89..100, nếu kỳ thi là "Thi cuối kỳ" thì học sinh phải đạt
// A+ và tổng điểm phải lớn hơn hoặc bằng 90. Nếu học sinh được điểm A+, trả về true, Ngược lại trả về false.

const getExercise38Result = document.querySelector(".exercise38Result");

const examStatus = function(totMarks,isExaminations) {
    if (isExaminations == "isExaminations") {
        return totMarks >= 90;
    } else {
        return (totMarks >= 89 && totMarks <= 100)
    }
}

getExercise38Result.innerHTML = examStatus(90,"isExaminations");

// Exercise 39: Viết chương trình Javascript để tính tổng của 2 số nguyên đã cho. 
// Nếu tổng nằm trong phạm vi 50..80 thì trả về 65 nếu không thì trả về 80.

const getExercise39Result = document.querySelector(".exercise39Result");

const checkTotalNumber = function (number1,number2) {
    if((Number.isInteger(number1) == true) && (Number.isInteger(number2) == true)) {
        if((number1 + number2 >= 50 ) && (number1 + number2 <= 80 ) ) {
            return getExercise39Result.innerHTML = 65;
        } else {
            return getExercise39Result.innerHTML = 80;
        }
    } else {
        return getExercise39Result.innerHTML = `not integer`;
    }
};

checkTotalNumber(50,40);

// Exercise 40: Viết chương trình javascript để kiểm tra từ 2 số nguyên đã cho xem một trong số chúng
// là 8 hay tổng hoặc hiệu của chúng là 8. 

const getExercise40Result = document.querySelector(".exercise40Result");

const check8 = function (number1,number2) {
    if((Number.isInteger(number1) == true) && (Number.isInteger(number2) == true)) {
        if(number1 == 8 || number2 == 8 || number1 + number2 == 8 || number1 - number2 == 8 || number2 - number1 == 8) {
            return getExercise40Result.innerHTML = true;
        } else {
            return getExercise40Result.innerHTML = false;
        }
    }
}

check8(2,6)

// Exercise 41: Viết chương trình Javascript để kiểm tra bộ ba số;
// Nếu ba số giống nhau trả về 30;
// Ngược lại trả về 20;
// Nếu hai số giống nhau trả về 40.

const getExercise41Result = document.querySelector(".exercise41Result");

const checkSameNumber = function (a,b,c) {
    if(a == b && a == c) {
        return getExercise41Result.innerHTML = 30;
    } else if(a == b || a == c || b == c ) {
        return getExercise41Result.innerHTML = 40;
    } else {
        return getExercise41Result.innerHTML = 20;
    }
}


checkSameNumber(30,50,40)


// Exercise 42: Viết chương trình Javascript để kiểm tra xem ba số đã cho đang tăng theo chế độ nghiêm ngặt (Strict mode) 
// hay chế độ mềm (soft mode). 
// Note: Chế độ strict mode: 10,15,31. Chế độ soft mode: 24,22,31 hoặc 22,22,31.

const getExercise42Result = document.querySelector(".exercise42Result");

const checkMode = function(a,b,c) {
    if (a < b && b < c) {
        return getExercise42Result.innerHTML = `Three given numbers increasing in strict mode`;
    } else if ((a >= b && a < c)) {
        return getExercise42Result.innerHTML = `Three given numbers increasing in soft mode`;
    } else {
        return getExercise42Result.innerHTML = `Three given numbers increasing in irregular mode`;
    }
}

checkMode(2,2,3);

// Exercise 43: Viết chương trình Javascript để kiểm tra trong ba số nguyên đã cho(Số nguyên không âm)
// xem có hai hoặc tất cả các số đó có có chữ số ngoài cùng bên phải giống nhau không.


const getExercise43Result = document.querySelector(".exercise43Result");

const checkLastDigit43 = function(a,b,c) {
    if (Number.isInteger(a) == true && Number.isInteger(b) == true && Number.isInteger(c) == true) {
       if((a % 10 === b % 10) ||( a % 10 === c % 10) ) {
        return getExercise43Result.innerHTML = `Given three numbers are the two or all numbers same rightmost digit.`;
       } else {
        return getExercise43Result.innerHTML = `Given three numbers are not the same rightmost digit.`;
       }
    } else {
        return getExercise43Result.innerHTML = `Given three numbers are not intergers.`;
    }
}

checkLastDigit43(25,2223,22222);

// Exercise 44: Viết chương trình Javascript để kiểm tra xem trong ba số nguyên đã cho, một số có lớn hơn hoặc bằng 20 hay không. 
// Nó có nhỏ hơn các số còn lại hay không. 

const getExercise44Result = document.querySelector(".exercise44Result");

const checkGreaterCondition = function(a,b,c) {
    if((a >= 20 || b >= 20 || c >= 20) && (Number.isInteger(a) == true && Number.isInteger(b) == true && Number.isInteger(c) == true)) {
        if((a >= 20) && (a < b || a < c) || (b >= 20) && (b < a || b < c) || (c >= 20) && (c < b || c < a) ) {
        return getExercise44Result.innerHTML = `Three integers given is eligible.`
        }
    } else {
        return getExercise44Result.innerHTML = `Three integers given is not eligible. `
    }
}

checkGreaterCondition(20,80,10);

// Exercise 45: Viết chương trình Javascript kiểm tra hai giá trị số nguyên và trả về true nếu một trong hai giá trị này là 15
// hoặc nếu tổng hoặc hiệu của chúng là 15.

const getExercise45Result = document.querySelector(".exercise45Result");

const checktwoNumbers45 = function (number1,number2) {
    if((Number.isInteger(number1) == true && Number.isInteger(number2) == true) 
    && (number1 == 15 || number2 == 15 || Math.abs(number1 - number2) == 15 || number1 + number2 == 15)) {
        return getExercise45Result.innerHTML = `Two numbers given is eligible.`
    } else {
        return getExercise45Result.innerHTML = `Two numbers given is not eligible.`
    }
}; 

checktwoNumbers45( 1,16);



// Exercise 46: Viết chương trình Javascript để kiểm tra hai số nguyên không âm đã cho nếu một(không phải cả hai) 
// là bội số của 7 hoặc 11.

const getExercise46Result = document.querySelector(".exercise46Result");

const checkMultupleNumber = function(number1,number2) {
    if((Number.isInteger(number1) == true) && (Number.isInteger(number2) == true)) {
        if((number1 % 7 == 0 && number2 % 7 ==0) || (number1 % 11 == 0 && number2 % 11 == 0) ) {
            return getExercise46Result.innerHTML = `Two given numbers is multiple of 7 or 11(bold) -> false.`;
        }else if((number1 % 7 == 0 || number2 % 7 == 0 || number1 % 11 == 0 || number2 % 11 == 0)) {
            return getExercise46Result.innerHTML = `Two given numbers is multiple of 7 or 11(not bold).`;
        } 
    } else {
        return false;
    }
};

checkMultupleNumber(33,16);

// Exersice 47: Viết chương trình Javascript để kiểm tra xem 1 số đã cho có tồn tại trong phạm vi 40..10000 hay không.
// VD 40 trình bày trong 40 và 4000.

const getExercise47Result = document.querySelector(".exercise47Result");

const checkRangeNumber = function(number) {
    if(number >= 40 && number <= 10000) {
        return getExercise47Result.innerHTML = `The given number exists in the range 40..10000.`
    } else {
        return  getExercise47Result.innerHTML = `The given number not exists in the range 40..1000. -> false.`;
    }
};

checkRangeNumber(100);

// Exercise 48: Viết chương trình Javascript để đảo ngược 1 chuỗi đã cho.

const getExercise48Result = document.querySelector(".exercise48Result");

const reverseImplement = function (s) {
    var o = [];
    for (var i = s.length - 1, j = 0; i >= 0; i--, j++)
      o[j] = s[i];
    return getExercise48Result.innerHTML = o.join('');
  }

reverseImplement("DoNgocHung");

// Exercise 49: Viết chương trình Javascript để thay thế mọi ký tự trong một chuỗi đã cho
// bằng ký tự theo sau nó trong bảng chữ cái.

function letterChanges(text) {
    let s = text.split('');
    for(let i = 0; i < s.length ; i++ ) {
        switch (s[i]) {
            case " ":
            break;
            case "z":
            s[i] = "a";
            break;
            case "Z":
            s[i] = "A";
            break;
            default:
            s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }
        switch(s[i]) {
            case "a" : case "e": case "i" : case "o" : case "u":
                s[i] = s[i].toUpperCase();
        }
    }
    return s.join("");
}

letterChanges("PYTHON");
letterChanges("W3R");
letterChanges("php");


// Exercise 50: Viết chương trình Javascript để viết hoa chữ cái đầu tiên của mỗi từ trong 1 chuỗi đã cho.

const getExercise50Result = document.querySelector(".exercise50Result");

const firstLetterToUpperCase = function (string) {
    string = string.split(" "); // method split lấy ra từng từ trong 1 đoạn văn thông qua 1 điểm chung.

    for(let i = 0; i < string.length; i++ ) {
        string[i] = string[i][0].toUpperCase() + string[i].substr(1);
    }
    return getExercise50Result.innerHTML = string.join(" ");
};

firstLetterToUpperCase("do ngoc hung");
firstLetterToUpperCase("thach thi hong");
firstLetterToUpperCase("write a javascript program to capitalize the first letter of each word of given string.")

// Exercise 51: Viết chương trình javascript để chuyển đổi 1 số đã cho thành giờ và phút.

const getExercise51Result = document.querySelector(".exercise51Result");

const convertToTime = function(number) {
    
    if(Number.isInteger(number) == true) {
        let hour = Math.floor(number / 60);
        let minutes = number%60; 
            if(hour >= 24) {
                let _hour = hour % 24;
                return getExercise51Result.innerHTML = `${_hour}:${minutes}.`;
            } else {
                return getExercise51Result.innerHTML = `${hour}:${minutes}.`;
            }
    }
}

convertToTime(14000);

// Exercise 52: Viết chương trình Javascript để chuyển đổi chữ cái của 1 chuỗi đã cho theo thứ tự bảng chữ cái.

const getExercise52Result = document.querySelector(".Exercise52Result");

const alphabetSoup = function(String) {
    let newString = String.split("").sort().join(""); //Method sort mặc định sort theo alphabet.
    return getExercise52Result.innerHTML = newString;
}

alphabetSoup("Dongochung");

// Exercise 53: Viết chương trình javascript để kiểm tra xem các ký tự a và b có được phân tách chính xác bằng 3 đơn vị chữ
// bất kỳ đâu (ít nhất 1 lần) trong 1 chuỗi đã cho hay không.

const getExercise53Result = document.querySelector(".exercise53Result");

const LettersPlaceCheck = function (string) {
    // let stringLetters = string.split("");
    let aPlace = string.search("a");
    let bPlace = string.search("b");
    if (Math.abs(aPlace - bPlace) >= 3) {
        return getExercise53Result.innerHTML = `The character a and b are spearated by exactly 3 places anywhere.`
    } else {
        return getExercise53Result.innerHTML = `The character a and b are spearated by not 3 places anywhere -> false.`

    }
}

LettersPlaceCheck("abcheck");

// Exercise 54: Viết chương trình Javascript đếm số chữ nguyên âm trong 1 chuỗi cho trước.

const getExercise54Result = document.querySelector(".exercise54Result");

const vowelCount = function (string) {
    let vowelsCount = 0;
    // turn the input into a string.
    let toString = string.toString();
    //loop through the string.
    for(let i = 0; i <= string.length - 1; i++  ) {
        if (toString.charAt(i) == "a" || toString.charAt(i) == "e" || toString.charAt(i) == "i" || toString.charAt(i) == "o" || toString.charAt(i) == "u" ) {
            vowelsCount += 1;
        }
    }
    return getExercise54Result.innerHTML = vowelsCount;
}

vowelCount("iiiii")


// Exercise 55: Viết chương trình Javascript để kiểm tra xem 1 chuỗi đã cho có
// chứa ố p và t bằng nhau hay không ? 

const getExercise55Result = document.querySelector(".exercise55Result");

const checkEqual = function(string) {
    let stringP = 0;
    let stringT = 0;
    let toString = string.toString();
    for (let i = 0; i <= toString.length -1 ; i ++) {
        if (toString.charAt(i) == "p") {
            stringP += 1;
        } else if (toString.charAt(i) == "t") {
            stringT += 1;
        }
    }
    return getExercise55Result.innerHTML = (stringP == stringT);
}

checkEqual("paattpss")

// Exercise 56: Viết chương trình Javascript để chia 2 số dương và trả về dưới dạng string có dấu phẩy
// được định dạng đúng.

const getExercise56Result = document.querySelector(".exercise56Result");

const divideNumbers = function(number1, number2) {
    output = (number1/number2).toString();
    result_array = output.split(".")
    return getExercise56Result.innerHTML = result_array;
}

divideNumbers(13,5);

// Exercise 57: Viết chương trình Javascript để tạo 1 chuỗi gồm các bản sao được chỉ định(Số dương)
// của 1 chuỗi đã cho.

const getExercise57Result  = document.querySelector(".exercise57Result");

console.log(getExercise57Result)



