import {
  Button,
  Input as ChakraInput,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'

export const Input = (props) => {
  return (
    <ChakraInput
      h="56px"
      fontSize="16px"
      focusBorderColor="brand.primary"
      {...props}
    ></ChakraInput>
  )
}

Input.Password = (props) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup h="56px" size="md" {...props}>
      <Input
        focusBorderColor="brand.primary"
        pr="4.5em"
        mb="300px"
        type={show ? 'text' : 'password'}
        placeholder="********"
      />
      <InputRightElement h="100%">
        <Button
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          size="sm"
          onClick={handleClick}
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {show ? (
            <ViewOffIcon boxSize="18px" color="brand.primary" />
          ) : (
            <ViewIcon boxSize="18px" color="brand.primary" />
          )}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

Input.Password.displayName = 'InputPassword'
