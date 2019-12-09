/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Sample Input
07:05:45PM

Sample Output
19:05:45

*/

function timeConversion(s) {
    let AMPM = s.slice(-2)
    let hour = s.slice(0, 2)
    if (AMPM === 'AM' && hour !== '12') {
        return s.slice(0, -2)
    } else if (AMPM === 'AM' && hour === '12') {
        return s.replace(hour, '00').slice(0, -2)
    } else if (AMPM === 'PM' && hour !== '12') {
        let hourInt = Number(hour) + 12
        let hourFinal = hourInt.toString()
        return s.replace(hour, hourFinal).slice(0, -2)
    } else {
        return s.slice(0, -2)
    }
}

// OR 

 function timeConversion(s) {
     let AMPM = s.slice(-2)
     let timeArr = s.slice(0, -2).split(":")

     if (AMPM === 'AM' && timeArr[0] === '12') {
         timeArr[0] === '00'
     } else if (AMPM === 'PM') {
        timeArr[0] = (timeArr[0] % 12) + 12
     }

     return timeArr.join(':')

 }