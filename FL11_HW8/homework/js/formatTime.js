function formatTime(time){
    let day = Math.floor(time/(24 * 60));
    let totalMinutes = time - day * 24 * 60;
    let hours = Math.floor( totalMinutes/60);
    let minutes = totalMinutes - hours*60;
    return `${day} day(s) ${hours} hour(s) ${minutes} minute(s)`
}
console.log(formatTime(3690));