const getCurrentTime = () => {
    const options = {
        timeZone: "Asia/Seoul",
        hour12: true,
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    const currentTime= new Date().toLocaleString("en-US", options)

    document.querySelector(".clock").innerHTML = currentTime

    setTimeout(getCurrentTime, 10)

} 

const checkLeadingZero = paramTime => {
    paramTime < 10
    ? paramTime = `0${paramTime}`
    : null

    return paramTime
}

