

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


// Exercies 8: Viết chương trình Javascript trong đó chương trình lấy 1 số nguyên 
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

// Exercies 9: Tính số ngày còn lại cho đến giáng sinh sắp tới!


const getChristmasRemainingDaysElement = document.querySelector('.christmasRemainingDays');

console.log(today)







