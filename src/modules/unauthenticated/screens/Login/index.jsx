import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'src/components'

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
          <Text.ScreenTitle mt="48px">Login</Text.ScreenTitle>
          <Input mt="24px" placeholder="email@example.com" />
          <Input.Password mt="16px" placeholder="********" />
          <Flex
            alignItems="flex-end"
            justifyContent="flex-end"
            mt="8px"
            w="100%"
          >
            <Link>Esqueceu sua senha?</Link>
          </Flex>
          <Button mt="24px">Login</Button>
          <Link.Action
            mt="48px"
            text="Não possui uma conta?"
            actionText="Cadastre-se aqui"
          />
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
