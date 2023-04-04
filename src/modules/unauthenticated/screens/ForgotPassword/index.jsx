import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button } from 'src/components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const ForgotPasswordScreen = () => {
  const navigate = useNavigate()

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido.')
        .required('E-mail é obrigatorio.')
    }),
    onSubmit: (data) => {
      navigate('/reset-password')
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
          <Text.ScreenTitle mt="48px">Esqueceu Senha</Text.ScreenTitle>
          <Text mt="24px">
            Digite abaixo seu email que enviaremos um codigo de recuperação de
            senha:
          </Text>
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

          <Button onClick={handleSubmit} mt="24px">
            Avançar
          </Button>
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
