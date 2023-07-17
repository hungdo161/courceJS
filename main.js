

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
    hour = (hour >= 12) ? hour - 12 : hour;
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


// Viết chương trình JavaScript để in nội dung cửa sổ hiện tại


    