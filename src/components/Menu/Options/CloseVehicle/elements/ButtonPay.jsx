import { Button, useMediaQuery } from '@chakra-ui/react';

const ButtonPay = ({ onClick, isDisabled }) => {
    const [lessThan] = useMediaQuery('(max-width: 768px)')
  return (
    <Button
      size={lessThan ? "md" : "sm"}
      variant="outline"
      type="button"
      onClick={onClick}
      p={3}
      m={lessThan ? 4 : 3}
      isDisabled={isDisabled}
    >
      {lessThan ? "Cerrar" : "Si ya pagó, presione aquí."}
    </Button>
  );
};

export default ButtonPay;
