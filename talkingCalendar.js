function talkingCalendar(date) {
    const month = date.slice(5, 7)
    let day = date.slice(8, 10)
    const months = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"
    };
    if (day[0] == "0"){
        day = day[1]
    }
    switch (day[day.length-1]){
        case "1" && day[0] != "1":
            day += "st";
            break;
        case "2":
            day += "nd";
            break;
        case "3":
            day += "rd";
            break;
        default:
            day += "th";
    }
    return `${months[month]} ${day}, ${date.slice(0, 4)}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/02/24"));