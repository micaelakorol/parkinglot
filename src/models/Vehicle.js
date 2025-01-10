import { round } from '../utils/round'

class Vehicle {
  #licensePlate 
  #entryHour 

  constructor(licensePlate, entryHour) {
    this.#licensePlate = licensePlate
    this.#entryHour = entryHour
  }

  getLicensePlate() {
    return this.#licensePlate
  }

  setLicensePlate(licensePlate) {
    return (this.#licensePlate = licensePlate)
  }

  getEntryHour() {
    return this.#entryHour
  }

  setEntryHour(hour) {
    return (this.#entryHour = hour)
  }

  calculateHours(departureTime) {
    let roundedEntryHour = round(this.#entryHour)
    if (departureTime < roundedEntryHour) {
      return 0
    } else {
      let parkedHours = departureTime - roundedEntryHour
      return Math.ceil(parkedHours)
    }
  }
  toString() {
    return ` ${this.#licensePlate} - ${this.#entryHour} hs`
  }
}

export default Vehicle
