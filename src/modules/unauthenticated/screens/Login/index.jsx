import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'src/components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const LoginScreen = () => {
  const navigate = useNavigate()

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido.')
        .required('E-mail é obrigatorio.'),
      password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres.')
        .required('Senha é obrigatoria.')
    }),
    onSubmit: (data) => {
      console.log(data)
    }
  })
  console.log({ values, errors })

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
          <Text.ScreenTitle mt="48px">Login</Text.ScreenTitle>
          <Input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            errors={errors.email}
            mt="24px"
            placeholder="email@example.com"
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            mt="16px"
            placeholder="********"
            onChange={handleChange}
            errors={errors.password}
          />
          <Flex
            alignItems="flex-end"
            justifyContent="flex-end"
            mt="8px"
            w="100%"
          >
            <Link onClick={() => navigate('/forgot-password')}>
              Esqueceu sua senha?
            </Link>
          </Flex>
          <Button onClick={handleSubmit} mb="12px" mt="24px">
            Login
          </Button>
          <Link.Action
            onClick={() => navigate('/signup')}
            mt="8px"
            text="Não possui uma conta?"
            actionText="Cadastre-se aqui"
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
