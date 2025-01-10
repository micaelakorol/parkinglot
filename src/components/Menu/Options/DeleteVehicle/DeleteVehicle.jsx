import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import InputVehicle from '../../reusable/InputVehicle';
import { parkingLotState } from '../../../../models/parkingLotState';
import '../../../../styles/app.css';
import handleChange from '../../functions/handleChange';
import { fieldDelete } from '../../../../utils/deleteField';
import { AlertContext } from '../../../../context/AlertContext';
import CustomAlert from '../../reusable/CustomAlert';

const DeleteVehicle = () => {
  const { alert, setAlert } = useContext(AlertContext);
  const [deleteField, setDeleteField] = useState(fieldDelete);
  const { licensePlateClose } = deleteField;

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    let result = parkingLotState.parkingLot.removeVehicle(licensePlateClose);
    setAlert({ status: result.status, message: result.message });
    if (result.status !== 'error') {
      setDeleteField(fieldDelete);
    }
  };

  return (
    <section className="container_options">
      <h3 className="title_options">Eliminar Vehículo</h3>
      <form action="" onSubmit={handleDeleteSubmit} className="container_form">
        <InputVehicle
          type="search"
          placeholder="Ingresar patente"
          name="licensePlateClose"
          value={deleteField.licensePlateClose}
          onChange={(e) => handleChange(e, setDeleteField)}
        />
        <IconButton type="submit" icon={<DeleteIcon />} />
      </form>
      <CustomAlert status={alert.status} message={alert.message} />
    </section>
  );
};

export default DeleteVehicle;
