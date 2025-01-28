import React from 'react'
import { Input, useMediaQuery } from '@chakra-ui/react'

const InputVehicle = ({
  name,
  placeholder,
  type,
  value,
  onChange,
}) => {
  const [lessThan] = useMediaQuery('(max-width: 768px)')
  return (
    <Input
      name={name}
      placeholder={placeholder}
      type={type}
      width={lessThan ? "80%" : "37%"}
      value={value}
      onChange={onChange}
      required
      variant="outline"
      color="fg.muted"
      size={lessThan ? "lg" : "md"}
      mb={5}
      p={5}
      css={{
        "::placeholder": {
          fontSize: ".9rem", // Tamaño normal
        },
        "@media (max-width: 576px)": {
          "::placeholder": {
            fontSize: ".88rem", // Tamaño reducido en pantallas menores a 800px
          },
        },
      }}
    />
  )
}

export default InputVehicle
