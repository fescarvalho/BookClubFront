import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'src/components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const RegisterLogin = () => {
  const navigate = useNavigate()
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Nome deve conter ao menos 3 caracteres')
        .required('Nome é obrigatorio.'),
      email: Yup.string()
        .email('E-mail inválido.')
        .required('E-mail é obrigatorio.'),
      password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres.')
        .required('Senha é obrigatoria.'),
      confirmPassword: Yup.string()
        .min(6, 'Confirmar a senha deve ter ao menos 6 caracteres.')
        .required('Confirmar a senha é obrigatorio.')
        .oneOf([Yup.ref('password'), null], 'Senha não são iguais.')
    }),
    onSubmit: (data) => {
      console.log({ data })
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
          <Text.ScreenTitle mt="48px">Cadastro</Text.ScreenTitle>
          <Input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            errors={errors.name}
            mt="24px"
            placeholder="Nome Completo"
          />
          <Input
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            errors={errors.email}
            mt="16px"
            placeholder="E-mail"
          />
          <Input
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            errors={errors.password}
            mt="16px"
            placeholder="Senha"
          />
          <Input.Password
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            errors={errors.confirmPassword}
            mt="16px"
            placeholder="Confirmar Senha"
          />

          <Button onClick={handleSubmit} mb="12px" mt="24px">
            Cadastrar
          </Button>
          <Link.Action
            onClick={() => navigate('/')}
            mt="8px"
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
