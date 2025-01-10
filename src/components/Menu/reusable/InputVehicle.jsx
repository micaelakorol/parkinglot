import React from 'react'
import { Input, useMediaQuery } from '@chakra-ui/react'

const InputVehicle = ({
  name,
  placeholder,
  type,
  value,
  onChange,
}) => {
  const [lessThan] = useMediaQuery('(max-width: 800px)')
  return (
    <Input
      name={name}
      placeholder={placeholder}
      type={type}
      width={lessThan ? "60%" : "35%"}
      value={value}
      onChange={onChange}
      required
      variant="flushed"
      color="fg.muted"
      size={lessThan ? "lg" : "md"}
      mb={5}
    />
  )
}

export default InputVehicle
