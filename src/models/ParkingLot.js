class ParkingLot {
  #vehicles
  #pricePerHour
  constructor() {
    this.#vehicles = []
    this.#pricePerHour = 50
  }

  /**
   * @param {Object} newVehicle representa el vehículo a agregar a la clase ParkingLot.
   */

  addVehicle(newVehicle) {
    let exist = this.#vehicles.some(
      (vehicle) => vehicle.getLicensePlate() === newVehicle.getLicensePlate()
    )
    if (exist) {
      return { status: 'warning', message: 'El vehículo ingresado ya existe' }
    } else {
      this.#vehicles.push(newVehicle)
      return { status: 'success', message: 'Vehículo añadido' }
    }
  }

  getRegisteredVehicles() {
    return this.#vehicles
  }

  getPricePerHour() {
    return this.#pricePerHour
  }

  setPricePerHour(newPrice) {
    return (this.#pricePerHour = newPrice)
  }
  /**
   *
   * @param {*} licensePlateClose es la patente del vehiculo que queremos calcular el precio
   * @param {*} departureTime hora de salida del vehículo del estacionamiento
   * @param {*} foundVehicle patente ingresada
   * @param {*} parkedHours total de horas estacionadas
   * @returns {totalPrice} precio a pagar por la estadía , según la cantidad de horas que permaneció
   */
  calculatePrice(licensePlateClose, departureTime) {
    const foundVehicle = this.#vehicles.find(
      (vehicle) => vehicle.getLicensePlate() === licensePlateClose
    )
    if (foundVehicle) {
      const parkedHours = foundVehicle.calculateHours(departureTime)
      if (parkedHours === 0) {
        return {
          status: 'error',
          message: 'La hora de egreso no puede ser menor a la ingreso.',
        }
      } else {
        const totalPrice = parkedHours * this.#pricePerHour
        return { status: 'info', message: totalPrice }
      }
    } else {
      return {
        status: 'error',
        message: 'Error, la patente ingresada no existe',
      }
    }
  }

  /**
   *
   * @param {*} vehicle objeto patente del vehiculo a remover de this.#vehicles
   * @param {*} initialLength longitud inicial del array
   * @returns {error} si la longitud inicial es igual a la longitud de array final, no se eliminó ningún vehículo del array.
   * @returns {success} si las longitudes son diferentes, hubo eliminación del array.
   */
  removeVehicle(licensePlateClose) {
    let initialLength
    if (licensePlateClose !== null) {
      initialLength = this.#vehicles.length
      this.#vehicles = this.#vehicles.filter(
        (item) => item.getLicensePlate() !== licensePlateClose
      )
    }
    if (this.#vehicles.length === initialLength) {
      return {
        status: 'error',
        message: `Error, no existe el dominio: ${licensePlateClose}`,
      }
    } else {
      return {
        status: 'success',
        message: `El vehículo ${licensePlateClose} ha sido removido.`,
      }
    }
  }

  getVehicles() {
    return this.#vehicles.map((vehicle) => vehicle.toString())
  }
}

export default ParkingLot
