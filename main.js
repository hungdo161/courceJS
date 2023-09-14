

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

const copiesString = function(string,number) {
   if(n <= 0) {
    return false;
   } else {
       return getExercise57Result.innerHTML =  string.repeat(number);
   }
}

copiesString("abc",2)

// Exercise 58: Viết chương trình Javascript để tạo 1 chuỗi cập nhật 
// gồm 4 bản sao của 3 ký tự cuối cùng của chuỗi gốc đã cho.
// Độ dài của chuỗi phải từ 3 trở lên. 

const getExercise58Result = document.querySelector('.exercise58Result');

const updateString = function(string) {
    if(string.length < 3 ) {
        return getExercise58Result.innerHTML = `<i>String is too shoot</i>`;
    } else {
       let last3Character = string.slice(-3);
       return getExercise58Result.innerHTML = `<i>${string}${last3Character}${last3Character}${last3Character}</i>`;
    }
}

updateString("Do Ngoc Hung");

// Exercise 59: Viết chương trình Javascript để trích xuất nửa đầu của chuỗi chẵn đã cho. 

const getExercise59Result = document.querySelector(".exercise59Result");

const extractHalf = function(string) {
    if (string.length % 2 !== 0) {
        return getExercise59Result.innerHTML = `<i>Given string not even.</i>`;
    } else {
        let getHalfString = string.slice(0,string.length/2);
        return getExercise59Result.innerHTML = `<i>${getHalfString}</i>`
    }
}

extractHalf("dongochung1");

// Exercise 60: Viết chương trình javascript để tạo 1 chuỗi mới không có ký tự đầu tiên và cuối cùng của chuỗi đã cho.

const getExercise60Result = document.querySelector(".exercise60Result");

const newString60 = function(string) {
    if(string.length <= 1) {
        return getExercise60Result.innerHTML = `<i>Given string is not eligible.</i>`
    }else {
        let output = string.slice(1,-1);
        return getExercise60Result.innerHTML = `<i>${output}</i>`;
    } 
}


newString60("hhungg");

// Exercise 61: Viết chương trình Javascript để nối 2 chuỗi ngoại
// trừ ký tự đầu tiên của chúng.

const getExercise61Result = document.querySelector(".exercise61Result");

const concatStrings = function(string1, string2) {
    let newString1 = string1.slice(0,-1);
    let newString2 = string2.slice(1);
    return getExercise61Result.innerHTML = `${newString1}-${newString2}`
}

concatStrings("string1","String2")

// Exercise 62: 

const getExercise62Result = document.querySelector(".exercise62Result");

const moveCharacters62 = function (string1,string2) {
    let newString1 = string1.slice(string1.length-3,string1.length);

    return getExercise62Result.innerHTML = `${newString1}${string2}`;
};

moveCharacters62("string1","string2");

// Exercise 63: Viêt chương trình Javascript để tạo 1 chuỗi sử dụng 3 ký tự của 1 chuỗi
// có độ dài lẻ cho trước. Độ dài của chuỗi phải lớn hơn hoặc bằng 3. 

const getExercise63Result = document.querySelector(".exercise63Result");

const newMiddeString63 = function(string) {
    if (string.length >= 3 && string.length % 2 != 0) {
       let output = string.slice(string.length/2 - 1,string.length/2+2)
       return getExercise63Result.innerHTML  = output;
    } else {
        return getExercise63Result.innerHTML = `<i>Given string is not ineligible</i>.`
    }
}

newMiddeString63("Thach thi Hong1")

//Exercise 64: Viết chương trình Javascript để nối hai chuỗi lại với nhau và trả về kết quả.
// nếu độ dài của 2 chuỗi không khớp với nhau thì hãy xoá ký tự khỏi chuỗi dài hơn.

const getExercise64Result = document.querySelector(".exercise64Result");

const concatStrings64 = function(string1,string2) {
    if(string1.length == string2.length) {
        return getExercise64Result.innerHTML = `${string1}${string2}`;
    } else if(string1.length >= string2.length) {
        let lengthDiff = string1.length - string2.length;
        let newString1 = string1.slice(0,string1.length -lengthDiff)
    return getExercise64Result.innerHTML = `<i>${newString1}${string2}</i>`;
        
    }
    else if (string2.length >= string1.length) {
        let lengthDiff2 = string2.length - string1.length;
        let newString2 = string2.slice(0,string2.length -lengthDiff2)
    return getExercise64Result.innerHTML = `<i>${string1}${newString2}</i>`;
    }
}

concatStrings64("do ngoc hung1","do ngoc hung2 thach thi hong");

// Exercise 65: Viết chương trình Javascript để kiểm tra xem 1 chuỗi có kết thúc băngf "Script" hay không.
// Độ dài chuỗi phải lớn hơn hoặc bằng 6.

const getExercise65Result = document.querySelector(".exercise65Result");

const checkStringScript = function(element) {
    if(element.length >= 6) {
        let last6Characters = element.slice(element.length -6,element.length)
        if (last6Characters == "Script"){
            return getExercise65Result.innerHTML = `<i>The given string ends with "Script".</i>`;
        }else {
        return getExercise65Result.innerHTML = `<i>Given string not ineligible.</i>`;
        }
    } else {
        return getExercise65Result.innerHTML = `<i>Given string has an ineligible length.</i>`;
    }
}
checkStringScript("typeScrip")

// Exercise 66: Viết Chương trình Javascript để hiển thị tên thành phố nếu chuỗi đó bắt đầu bằng 
// "Los" or "New" nếu không thì trả về trống(blank).

const getExercise66Result = document.querySelector(".exercise66Result");

const checkCityCharacters = function (city) {
    if (city.length < 3) {
        return getExercise66Result.innerHTML = `<i>The given string has an ineligible length.</i>`
    } else {
        let threeFirstcharacters = city.slice(0,3);
        if(threeFirstcharacters == "New" || threeFirstcharacters == "Los") {
            return getExercise66Result.innerHTML = `<h4>${city}</h4>`;
        } else {
          return  getExercise66Result.innerHTML = ` `;
        }
    }
}

checkCityCharacters("LosAngeles");

// Exercise 67: Viết chương trình javaScript để tạo một chuỗi mới từ 1 chuỗi đã cho. Chương trình này loại bỏ ký tự đầu tiên
// và cuối cùng của chuỗi nếu ký tự đầu tiên hoặc cuối cùng là "P". Trả về chuỗi gốc nếu điều kiện không được thoả mãn.

const getExercise67Result = document.querySelector(".exercise67Result");

const exercise67Result = function (string) {
    let firstCharacter = string.slice(0,1);
    let lastCharacter = string.slice(-1);
    if(firstCharacter == "P" && lastCharacter == "P") {
        let newCharacter = string.slice(1,string.length - 1);
        return getExercise67Result.innerHTML = `<i>${newCharacter}</i>`
    }else if(firstCharacter == "P") {
       let newCharacter = string.slice(1,string.length);
       return getExercise67Result.innerHTML = `<i>${newCharacter}</i>`
    }else if (lastCharacter == "P") {
        let newCharacter =  string.slice(0,string.length -1);
        return getExercise67Result.innerHTML = `<i>${newCharacter}</i>`
    } else {
        return getExercise67Result.innerHTML = `<i>${string}</i>`
    }
}

exercise67Result("string")

// Exercise 68: Viết chương trình Javascript để tạo 1 chuỗi mới sử dụng n ký tự đầu tiên và cuối cùng
// của 1 chuỗi nhất định. Độ dài của chuỗi phải lớn hơn hoặc bằng n.

const getExercise68Result = document.querySelector(".exercise68Result");

const useNumberCharacterString = function(string,number) {
    if ( string.length < number ) {
        return getExercise68Result.innerHTML = `<i>The given String not ineligible.</i>`
    } else {
        let firstPart = string.slice(0,number);
        let lastPart = string.slice(string.length - number,string.length);
        return getExercise68Result.innerHTML = `<i>${firstPart}${lastPart}</i>`;
    }
};

useNumberCharacterString("Javascript",6)

//Exercise 69: Viết chương trình javascript để tính tổng 3 phần từ của 1 mảng số nguyên có độ dài bằng 3 cho trước.

const getExercise69Result = document.querySelector(".exercise69Result");

const totalIntegersExercise69 = function (number) {
        return getExercise69Result.innerHTML = `Total: ${number[0] + number[1] + number[2]}`;
} 

totalIntegersExercise69([5,6,7])

// Exercise 70: Viết chương trình Javascript để xoay các phần tử còn lại trong 1 mảng các số nguyên
// có độ dài 3 cho trước.

const getExercise70Result = document.querySelector(".exercise70Result");

const rotateLeftExercise70 = function(number) {
    return getExercise70Result.innerHTML = `Output: ${number[1]},${number[2]},${number[0]}`;
}

rotateLeftExercise70([7,6,5]);


// Exercise 71: Viết chương trình Javascript để kiểm tra xem số 1 xuất hiện ở vị trí đầu tiên
// hay cuối cùng của 1 mảng số nguyên nhất định. Độ dài của mảng phải lớn hơn hoặc bằng 1.

const getExercise71Result = document.querySelector(".exercise71Result");

const checkNumber1Position = function (array) {
    if(array.length < 1) {
        return getExercise71Result.innerHTML = `The given array does not astisfy the condition.`;
    } else {
       let message = (array[0] == 1 || array[array.length-1] == 1) ? true : false;
       if(message == true) {
        return getExercise71Result.innerHTML = `<i>The given array satisfies the condition.</i>`
       }else {
        return getExercise71Result.innerHTML = `<i>The given array does not astisfy the condition.</i>`;
       }
    }

};

checkNumber1Position([0,3,4,4,1]);

// Exercise 72: Viết chương trình Javascript để kiểm tra xem phần từ đầu tiên và phần tử cuối cùng
// có giống nhau trong 1 mảng sô nguyên có độ dài bằng 3 cho trước không.

const getExercise72Result = document.querySelector(".exercise72Result");

const checkSameExercise72 = function(array) {
    if (array[0] == array[array.length-1]) {
        return getExercise72Result.innerHTML = `<i>The ginven array with first and last elements are the same.</i>`
    } else {
        return getExercise72Result.innerHTML = `<i>The given array does not astisfy the condition.</i>`
    }
}

checkSameExercise72([1,2,0])

// Exercise 73: Viết chương trình javascript để đảo ngược các phần tử của 1 mảng số nguyên có độ dài là 3.

const getExercise73Result = document.querySelector(".exercise73Result");

const reverseArray73 = function(array) {
    if(array.length == 3) {
        return getExercise73Result.innerHTML = `${array[2]},${array[1]},${array[0]}`
    } else {
        return false
    }
}

reverseArray73([4,5,6])

// Exercise 74: Viết chương trình Javascript để tìm giá trị lớn nhất giữa phần tử đầu tiên
// và phần tử cuối cùng và đặt tất cả các phần tử khác thành giá trị đó. Hiển thị mảng được cập nhật.

const getExercise74Result = document.querySelector(".exercise74Result");

const changeAllMaxValue = function (array) {
    let arrayLength = array.length;
    if(arrayLength >= 2) {
        let maxValue = array[0] > array[arrayLength - 1 ] ? array[0] : array[arrayLength - 1];
        array[0] = maxValue; 
        array[1] = maxValue;
        array[2] = maxValue;
        return getExercise74Result.innerHTML = array
    }
}

changeAllMaxValue([40,30,20])

// Exercise 75: Viết chương trình JavaScript để tạo 1 mảng lấy các phần tử ở giữa của 2 mảng số nguyên và mỗi mảng có độ dài bằng 3.

const getExercise75Result = document.querySelector(".exercise75Result");

const newMiddelArray = function(array1,array2) {
    if(array1.length % 2 == 1 && array2.length % 2 == 1) {
        let result = [];
       let getIndex1 = Math.floor(array1.length/2);
       let getIndex2 = Math.floor(array2.length/2);
       result.push(array1[getIndex1],array2[getIndex2])
       return getExercise75Result.innerHTML = result;
    } else {
        return getExercise75Result.innerHTMl = `The givens array is not eligible.`
    }
}
newMiddelArray([1,2,3,4,5],[1,2,3,4,5,6,7])

// Exercise 76: Viết chương trình Javascript để tạo 1 mảng bằng cách lấy phần từ đầu tiên và cuối 
// cùng từ 1 mảng số nguyên cho trước. Độ dài của mảng phải lớn hơn hoặc bằng 1.

const getExercise76Result = document.querySelector(".exercise76Result");

const newArray76 = function(array) {
    let arrayLength = array.length;
    if(arrayLength < 1) {
        return getExercise76Result.innerHTML = `<i>The givens array is not eligible.</i>`
    } else {
        let output = [];
        let getFirstElement = array[0];
        let getLastElement = array[arrayLength-1];
        output.push(getFirstElement, getLastElement)
        return getExercise76Result.innerHTML = `<i>${output}</i>`;
    }
}

newArray76([0,1,2,3,4])

// Exercise 77: Viết chương trình Javascript để kiểm tra xem 1 mảng số nguyên có độ dài chứa 1 hay 3.

const getExercise77Result = document.querySelector(".exercise77Result");

const checkOneAndThreeTrue = function(array) {
    if(array.indexOf(1) != -1 || array.indexOf(3) != -1) {
        return getExercise77Result.innerHTML = true
    } else {
        return getExercise77Result.innerHTML = false

    }
}

checkOneAndThreeTrue([0,3])

// Exercise 78: Viết chương trình Javascript để kiểm tra xem 1 mảng số nguyên có độ dài là 2 không chứa 1 hoặc 3.

const getExercise78Result = document.querySelector(".exercise78Result");

const checkOneAndThreeFalse = function(array) {
    if(array.indexOf(1) == -1 && array.indexOf(3) == -1) {
        return getExercise78Result.innerHTML = true;
    } else {
        return getExercise78Result.innerHTML = false;
    }
}
checkOneAndThreeFalse([1,2])

// Exercise 79: Viết chương trình Javascript để kiểm tra xem một mảng số nguyên cho trước có chứa 30,40 hai lần hay không.
// Độ dài của mảng nên là 0,1 hoặc 2.

const getExercise79Result = document.querySelector(".exercise79Result");

const checkTwiceIntegers = function(array) {
    if ((array[0] == 30 && array[1] == 30) || (array[0] == 40 && array[1] == 40))  {
        return getExercise79Result.innerHTML = `<i>True</i>`
    } else {
        return getExercise79Result.innerHTML = `<i>False</i>`
    }
}

checkTwiceIntegers([30,30])

// Exercise 80: Viêt chương trình Javascript để hoán đổi phần từ đầu tiên và cuối cùng của một mảng số nguyên cho trước.
// Độ dài của mảng tối thiểu phải bằng 1.

const getExercise80Result = document.querySelector(".exercise80Result"); 

const swaptArrayResult = function(array) {
    let arrayLength = array.length;
    if (arrayLength <= 1) {
        getExercise80Result.innerHTML = `False`;
    } else {
        [array[0],array[arrayLength - 1]] = [array[arrayLength -1],array[0]]
        return  getExercise80Result.innerHTML = array;
    }
}

swaptArrayResult([10,1,5,6,7])

// Exercise 81: Viết chương trình Javascript để cộng 2 chữ số vào một số nguyên dương có độ dài bằng 2 cho trước.

const getExercise81Result = document.querySelector(".exercise81Result");

// const totalNumber81 = function (array,preNumber) {
//     return getExercise81Result.innerHTML = `<i>Result:</i> ${array[0] + array[1] + preNumber}`;
// } 

// totalNumber81([5,10],20);

const totalNumber81 = function (number) {
    let NumberToString = number.toString();
    let numberLength = NumberToString.length;
    if(numberLength == 2) {
        let firstValue = Math.floor(number/10);
        let lastValue = number%10;
        return getExercise81Result.innerHTML = `<i>output:</i> ${firstValue} + ${lastValue} = ${firstValue + lastValue}`;
    } else {
        return getExercise81Result.innerHTML = `Flase.`;
    }
}

totalNumber81(99)

// Exercise 82: Viết chương trình Javascript để cộng hai số nguyên dương theo từng thành phần 1, 
// Nếu giá trị >= 10 thì sẽ chỉ lấy vế sau. 

const getExercise82Result = document.querySelector(".exercise82Result");

const addTwoIntegersWithOutCarrying = function(number1,number2) {
    let result = 0;
    i =1;
    while(number1 > 0 && number2 >0 ) {
        result += i*((number1 + number2)%10)
        number1 = Math.floor(number1/10);
        number2 = Math.floor(number2/10);
        i *= 10;
    }
    return getExercise82Result.innerHTML = result;
}

addTwoIntegersWithOutCarrying(193,914)

// Exercise 83: Viết chương trình Javascript để tìm chuỗi dài nhất từ 1 mảng chuỗi cho trước.

const Course = [
    "javascript",
    "java",
    "next.JS",
    "React.JS",
    "Javascript + HTML,CSS"
]

const getExercise83Result = document.querySelector(".exercise83Result");

const theLongestString = function(array) {
    array.reduce(function(string1,string2) {
        let string1Length = string1.length;
        let string2Length = string2.length;
       return output = string1Length > string2Length ? string1 : string2;
    })
    return getExercise83Result.innerHTML =`The longest string: ${output}`;
} 

theLongestString(Course)

// Exercise 84: Viết chương trình Javascript để thay thế từng ký tự trong một chuỗi nhất định bằng ký tự tiếp theo trong bảng chữ cái alphabet.
// Note: "a" sẽ được thay thế bằng "b" hoặc "z" sẽ được thay thế bằng "a";

const getExercise84Result = document.querySelector(".exercise84Result");

// Note: Đề bài này tương tự với exercise 49 nên có thể tận dụng function đó được. 

const TheGivenString = "Javascript";

getExercise84Result.innerHTML = letterChanges(TheGivenString);

// Exercise 85: Viết chương trình Javascript để chia một mảng số nguyên dương cho trước thành 2 phần.
// Phần thứ nhất thuộc về phần thứ nhất, phần thứ 2 thuộc về phần thứ 2 và phần tử thứ 3 thuộc về phần thứ nhất.. vv, 
// cuối cùng hãy tính tổng của 2 phần lại và lưu nó vào 1 mảng có kích thước là 2 phần tử. 

const getExercise85Result = document.querySelector(".exercise85Result");

const arrayNumber = [0,9,6,8,9,1,8,7,9,4];



const divideArray = function (array) {
    let arrayLength = array.length;
    let resultArray = [0,0];

    for(let i = 0; i < arrayLength ; i++) {
        if(i % 2 == 0) {
            resultArray[0] += array[i];
        } else {
            resultArray[1] += array[i]; 
        }
    }
    return getExercise85Result.innerHTML = `Output: ${resultArray}`;
};

divideArray(arrayNumber);



// Exercise 86: Viết chương trình Javascript để tìm các loại góc cho trước: 
// Các loại góc :
// - Góc nhọn: Từ 0 đến 90 độ.
// - Góc vuông: 1 góc 90 độ.
// - Góc tù: Góc từ 90 - 180 độ.
// - Góc thẳng: Góc 180 độ.

const getExercise86Result = document.querySelector(".exercise86Result");

const checkAngle = function(degree) {
    if(degree > 0 && degree < 90) {
      return  getExercise86Result.innerHTML = `This given angle is acute angle.`;
    } else if (degree == 90) {
        return getExercise86Result.innerHTML = `This given angle is right angle.`;
    } else if (degree > 90 && degree < 180) {
        return getExercise86Result.innerHTML = `This given angle is obuse angle.`;
    }else if (degree == 180) {
        return getExercise86Result.innerHTML = `This given angle is straight angle.`;
    }
}

checkAngle(180)

// Exercise 87: Viết chương trình Javascript để xác định xem hai mảng số nguyên có cùng độ dài có giống nhau hay không.
// Các mảng sẽ tương tự nhau nếu 1 mảng có thể được lấy từ một mảng khác bằng cách hoán đổi tối đa 1 cặp phần tử. 

const getExercise87Result = document.querySelector(".exercise87Result");

const checkArraySimilar = function (array1, array2) {
    // get characters length
    array1String = array1.toString();
    array2String = array2.toString();

    if(array1String === array2String) {
        return getExercise87Result.innerHTML =  true; 
    } else {
        return getExercise87Result.innerHTML =  false; 
    }

}

checkArraySimilar(
    ["Javascript"],
    ["Javascript"]
    )


// Exercise 88: Viết chương trình Javascript nhận vào hai số nguyên và 1 ước số. Nếu ước số đã cho chia cả hai số nguyên
// và không chia hết thì 2 số nguyên đã cho là tương tự nhau. Kiểm tra xem 2 số nguyên có giống nhau hay không. 

const getExercise88Result = document.querySelector(".exercise88Result");

const checkSimilarIntegers = function(integer1,integer2,divisor) {
    if(integer1 % divisor == 0 && integer2 % divisor == 0) {
        return getExercise88Result.innerHTML = `<i>The given divisor is divides by both integers.</i>`
    } else {
        if(integer1 == integer2) {
            return getExercise88Result.innerHTML = `<i>Two specified integers are similar.</i>`
        }else {
            return getExercise88Result.innerHTML = `<i>Two specified integers not similar.</i>`
        }
    }    
}

checkSimilarIntegers(50,50,8);

// exercise 89: Viết chương trình Javascript để kiểm tra xem có thể thay thế $ trong 1 biêu thức x$y=z 
// bằng 1 trong 4 dấu +,-,* hoặc / để thu được biểu thức đúng hay không.

// x = 10, y = 30 và z = 300 thì ta có thể thay $ bằng toán tử bội(*) để thu được biểu thức đúng x*y=z.

const getExercise89Result = document.querySelector(".exercise89Result");

const correctExpression = function(x,y,z) {
     if (x * y == z) {
        return getExercise89Result.innerHTML = ` ${x} * ${y} = ${z} `;
     } else if (x  / y == z) {
        return getExercise89Result.innerHTML = `${x} / ${y} = ${z} `;
     } else if (x + y == z) {
        return getExercise89Result.innerHTML = `${x} + ${y} = ${z} `;
     } else if(x - y == z){
        return getExercise89Result.innerHTML = `${x} - ${y} = ${z} `;
     } else {
        getExercise89Result.innerHTML = `<i>Given expression has no meaning.</i>`;
     }
}

correctExpression(6,2,8);

// Exercise 90: Viết chương trình javascript để tìm phần tử lớn thứ k trong 1 mảng sô nguyên cho trước. 

const getExercise90Result = document.querySelector(".exercise90Result");

const kThFindIndexInArray = function(array,k) {
    if (array.length <= k) {
        return getExercise90Result.innerHTML = `serial number K does not exist.`
    } else {
        return getExercise90Result.innerHTML = array[k-1];
    }
}
kThFindIndexInArray([1,2,6,4,5], 3)

// Exercise 91: Viết chương trình javascript để tìm tổng số tối đa có thể cảu 1 số k liên tiếp của nó(các số nối tiếp nhau theo thứ tự) 
// trong một mảng số nguyên dương cho trước.\

const getExercise91Result = document.querySelector('.exercise91Result');

const findMaxTotal = function(array,k) {
    // check if the array length is less than k ( Kiểm tra xem độ dài của mảng có nhỏ hơn hoặc bằng k không)
    if (array.length <= k) {
        total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i];
        }
        return total;
    } else {
        // initialize the sum of the first k elements (Khởi tạo tổng của k phần từ đầu tiên.)
        let sum = 0;
        for (let i = 0; i < k ; i++) {
            sum += array[i];
        }
         // initialize the maximum sum as the current sum( Khởi tạo tổng tối đa là tổng hiện tại)
        let max = sum;
         // loop through the remaining elements( lặp qua các phần tử còn lại)
        for (let i = k; i < array.length; i++) {
            // update the current sum by adding the next element and subtracting the first element of the previous window.
            // Cập nhật tổng hiện tại bằng cách cộng các phần tử tiếp theo và trừ đi phần tử đầu tiên của phần trước đó.
            sum = sum + array[i] - array[i -k];
             // update the maximum sum if the current sum is greater
             // Cập nhật số lớn nhất nếu tổng hiện tại lớn hơn.
            max = Math.max(max,sum);
        }
         // return the maximum sum
         // trả về sum lớn nhất
        return max;
    }  
}


findMaxTotal([1,8,9,9,5], 5)

// Exercise 92: Viết chương trình javascript để tìm sự khác biệt lớn nhất giữa hai phần tử
// liền kề bất kỳ của 1 mảng số nguyên cho trước.

const getExercise92Result = document.querySelector(".exercise92Result");

const checkAbsMaximum = function (array) {
    // let max = -1;
    for(let i = 0; i < array.length -1; i++) {
        temp = Math.max(array[i], array[i+1])
        // max = Math.max(max,temp)
    }
    return getExercise92Result.innerHTML = temp;
}

checkAbsMaximum([5,10,8,5,12,87])

// Exercise 93: Viết chương trình Javascript để tìm sự khác biệt lớn nhất giữa các cặp có thể có của 
// một mảng số nguyên cho trước. 

const getExercise93Result = document.querySelector(".exercise93Result");

const maximumDifferenceFind = function(array) {
    let maxResult = 0;
    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j != i; j++) {
            diffValue = Math.abs(array[i] - array[j]);
            maxResult = Math.max(diffValue,maxResult)
        }
    }
    return getExercise93Result.innerHTML = maxResult
}   


maximumDifferenceFind([5,6,7,100,8,9,-500])


