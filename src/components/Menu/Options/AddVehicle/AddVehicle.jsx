import { IconButton } from '@chakra-ui/react';
import '../../../../styles/options.css';
import { CheckIcon } from '@chakra-ui/icons';
import { useContext, useState } from 'react';
import InputVehicle from '../../reusable/InputVehicle';
import { parkingLotState } from '../../../../models/parkingLotState';
import CustomAlert from '../../reusable/CustomAlert';
import { initialFormStateAdd } from '../../../../utils/initialFormState';
import { regExp } from '../../../../utils/regExp';
import handleChange from '../../functions/handleChange';
import Vehicle from '../../../../models/Vehicle';
import { AlertContext } from '../../../../context/AlertContext';

const AddVehicle = () => {
  const [add, setAdd] = useState(initialFormStateAdd);
  const { alert, setAlert } = useContext(AlertContext);
  const { hour, licensePlate } = add;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (regExp.test(licensePlate)) {
      let newVehicle = new Vehicle(licensePlate, hour);
      const result = parkingLotState.parkingLot.addVehicle(newVehicle);
      setAlert({
        status: result.status,
        message: result.message,
      });
      if (result.status !== 'warning' && result.status !== 'error') {
        setAdd(initialFormStateAdd);
      }
    } else {
      setAlert({ status: 'error', message: 'Error, patente inválida' });
    }
  };

  return (
    <section className="container_options">
      <h3 className="title_options">Agregar Vehículo</h3>
      <form onSubmit={handleSubmit} className="container_form">
        <InputVehicle
          placeholder="Añadir patente"
          name="licensePlate"
          value={licensePlate}
          onChange={(e) => handleChange(e, setAdd)}
        />
        <InputVehicle
          placeholder="Añadir hora entrada"
          name="hour"
          value={hour}
          onChange={(e) => handleChange(e, setAdd)}
          type="time"
        />
        <IconButton type="submit" icon={<CheckIcon />} />
      </form>
      <CustomAlert status={alert.status} message={alert.message} />
    </section>
  );
};

export default AddVehicle;
