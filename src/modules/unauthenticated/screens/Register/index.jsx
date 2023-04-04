import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'src/components'
import { useNavigate } from 'react-router-dom'

export const RegisterLogin = () => {
  const navigate = useNavigate()
  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        justifyContent="center"
        alignItems={['center', 'flex-start']}
        padding={['24px', '48px', '80px', '112px']}
        flexDir="column"
        w={['100%', '100%', '100%', '40%']}
        h="100%"
      >
        <Flex w={['100%', '100%', '100%', '416px']} flexDir="column">
          <Image
            src="/img/logo.svg"
            alt="book club logo"
            w="160px"
            h="48px"
          ></Image>
          <Text.ScreenTitle mt="48px">Cadastro</Text.ScreenTitle>
          <Input mt="24px" placeholder="Nome Completo" />
          <Input mt="16px" placeholder="E-mail" />
          <Input mt="16px" placeholder="Senha" />
          <Input.Password mt="16px" placeholder="Confirmar Senha" />

          <Button mt="24px">Cadastrar</Button>
          <Link.Action
            onClick={() => navigate('/')}
            mt="48px"
            text="Já possui uma conta?"
            actionText="Faça login aqui"
          />
        </Flex>
      </Flex>
      <Flex
        w={['0%', '0%', '0%', '60%']}
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
