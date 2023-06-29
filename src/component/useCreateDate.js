

const useCreateDate = ()=>{
    const dateObj = new Date()
    const month = dateObj.getMonth()

    let monthName;

    switch(month){
        case 0: monthName = "Jan";
        break;
        case 1: monthName = "FEB";
        break;
        case 2: monthName = "MAR";
        break;
        case 3: monthName = "APRIL";
        break;
        case 4: monthName = "MAY";
        break;
        case 5: monthName = "JUNE";
        break;
        case 6: monthName = "JULY";
        break;
        case 7: monthName = "AUG";
        break;
        case 8: monthName = "SEPT";
        break;
        case 9: monthName = "OCT";
        break;
        case 10: monthName = "NOV";
        break;
        case 11: monthName = "DEC";
        break;
    }

    const date = ` ${monthName} ${dateObj.getDate()} ${dateObj.getFullYear()} [${dateObj.getHours()} : ${dateObj.getMinutes()}]`

    return date
}

export default useCreateDate