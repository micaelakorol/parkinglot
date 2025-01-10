export function round(hour) {
    let [inputHour, minutes] = hour.split(":").map(num => parseInt(num));
    if (minutes >= 30) {
      inputHour += 1;
    }
    return inputHour;
  }
  
  