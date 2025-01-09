// String for Tomorrow's Date
 function tomorrowDate(){
    const today = new Date()
    today.setDate(today.getDate() + 1)

    return today.toISOString().split('T')[0]
}

 console.log(tomorrowDate())