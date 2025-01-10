import { IconButton } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import InputVehicle from '../../../reusable/InputVehicle';

const CloseVehicleForm = ({ fieldClose, setFieldClose, handleCalculate }) => {
  const { licensePlateClose, departureTime } = fieldClose;

  return (
    <form onSubmit={handleCalculate} className="container_form">
      <InputVehicle
        placeholder="Añadir patente"
        name="licensePlateClose"
        value={licensePlateClose}
        onChange={(e) => setFieldClose((prev) => ({ ...prev, licensePlateClose: e.target.value }))}
      />
      <InputVehicle
        type="time"
        placeholder="Ingresar hora de salida"
        name="departureTime"
        value={departureTime}
        onChange={(e) => setFieldClose((prev) => ({ ...prev, departureTime: e.target.value }))}
      />
      <IconButton type="submit" icon={<CheckIcon />} />
    </form>
  );
};

export default CloseVehicleForm;
