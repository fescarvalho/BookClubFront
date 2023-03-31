import { Flex, Image, Input, Text, Link, Button } from '@chakra-ui/react'

export const LoginScreen = () => {
  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        justifyContent="center"
        alignItems="flex-start"
        paddingLeft="112px"
        flexDir="column"
        w="40%"
        h="100%"
      >
        <Flex w="416px" flexDir="column">
          <Image
            src="/img/logo.svg"
            alt="book club logo"
            w="160px"
            h="48px"
          ></Image>
          <Text mt="48px">Login</Text>
          <Input mt="24px" placeholder="email@example.com" />
          <Input mt="16px" placeholder="********" />
          <Link mt="8px">Esqueceu sua senha?</Link>
          <Button mt="24px">Login</Button>
          <Link mt="48px">Não possui uma conta? Cadastre-se aqui.</Link>
        </Flex>
      </Flex>
      <Flex
        w="70%"
        h="100%"
        backgroundImage="url(/img/login-background.svg)"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="32px"
        borderBottomLeftRadius="32px"
      />
    </Flex>
  )
}
