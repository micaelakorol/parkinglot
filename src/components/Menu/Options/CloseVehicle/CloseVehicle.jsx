import { useState, useContext } from 'react';
import { parkingLotState } from '../../../../models/parkingLotState';
import { round } from '../../../../utils/round';
import { AlertContext } from '../../../../context/AlertContext';
import { initialFormStateClose } from '../../../../utils/initialFormStateClose';
import CloseVehicleForm from './elements/CloseVehicleForm';
import ButtonPay from './elements/ButtonPay'
import CustomAlert from '../../reusable/CustomAlert'

const CloseVehicle = () => {
  const [fieldClose, setFieldClose] = useState(initialFormStateClose);
  const [totalPrice, setTotalPrice] = useState(0);
  const { alert, setAlert } = useContext(AlertContext);

  const handleCalculate = (e) => {
    e.preventDefault();
    const result = parkingLotState.parkingLot.calculatePrice(
      fieldClose.licensePlateClose,
      round(fieldClose.departureTime)
    );
    setTotalPrice(result.message);
    setAlert({ status: result.status, message: result.message });
  };

  const handleRemove = (e) => {
    e.preventDefault();
    const result = parkingLotState.parkingLot.removeVehicle(fieldClose.licensePlateClose);
    setAlert({ status: result.status, message: result.message });
    setFieldClose(initialFormStateClose);
    setTotalPrice(0)
  };

  return (
    <section className="container_options">
      <h3 className="title_options">Cerrar Vehículo</h3>
      <CloseVehicleForm
        fieldClose={fieldClose}
        setFieldClose={setFieldClose}
        handleCalculate={handleCalculate}
      />
      <ButtonPay
      onClick={handleRemove}
      isDisabled={!(typeof totalPrice === 'number') || !(totalPrice > 0)}
    />
    <CustomAlert status={alert.status} message={alert.message} />
    </section>
  );
};

export default CloseVehicle;
