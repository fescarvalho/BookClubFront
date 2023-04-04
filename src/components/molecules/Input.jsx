import {
  Button,
  Input as ChakraInput,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { Text } from 'src/components/atoms/Text'

export const Input = (props) => {
  return (
    <>
      <ChakraInput
        h="56px"
        fontSize="16px"
        focusBorderColor="brand.primary"
        {...props}
      />
      {props.errors && <Text color="red">{props.errors}</Text>}
    </>
  )
}

Input.Password = ({ values, onChange, id, name, ...props }) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <>
      <InputGroup h="56px" size="md" {...props}>
        <Input
          onChange={onChange}
          values={values}
          id={id}
          name={name}
          focusBorderColor="brand.primary"
          pr="4.5em"
          mb="300px"
          fontSize="16px"
          type={show ? 'text' : 'password'}
          placeholder="********"
          display="flex"
          alignItems="center"
          justifyContent="center"
        />
        <InputRightElement h="100%">
          <Button
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            size="sm"
            onClick={handleClick}
            h="100%"
          >
            {show ? (
              <ViewOffIcon boxSize="18px" color="brand.primary" />
            ) : (
              <ViewIcon boxSize="18px" color="brand.primary" />
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
      {props.errors && <Text color="red">{props.errors}</Text>}
    </>
  )
}

Input.Password.displayName = 'InputPassword'
