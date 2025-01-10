import { Button, useMediaQuery } from '@chakra-ui/react';

const ButtonPay = ({ onClick, isDisabled }) => {
    const [lessThan] = useMediaQuery('(max-width: 800px)')
  return (
    <Button
      size={lessThan ? "md" : "sm"}
      variant="outline"
      type="button"
      onClick={onClick}
      p={4}
      isDisabled={isDisabled}
    >
      Si ya pagó, presione aquí.
    </Button>
  );
};

export default ButtonPay;
