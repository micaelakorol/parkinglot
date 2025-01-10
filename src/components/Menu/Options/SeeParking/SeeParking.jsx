import {
  Table,
  TableContainer,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'
import '../../../../styles/options.css'
import { parkingLotState } from '../../../../models/parkingLotState'
const SeeParking = () => {
  let result =  parkingLotState.parkingLot.getVehicles();

  console.log(result)

  return (
    <section className="container_options">
      <h3 className="title_options">Playa de estacionamiento</h3>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Patente | Hora de entrada</Th>
            </Tr>
          </Thead>
          <Tbody>
            {result.length > 0 ? (
              result.map((vehicle, index) => (
                <Tr key={index}>
                  <Td>{vehicle}</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan="2">Oops! Aún no hay vehículos.</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </section>
  )
}

export default SeeParking
