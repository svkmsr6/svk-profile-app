export function getFormattedDate(day,month,year){
    return new Date(Date.UTC(year, month-1, day)).toLocaleString().split(',')[0];
}