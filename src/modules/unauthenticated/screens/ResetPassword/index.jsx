import { Flex, Image, useToast } from '@chakra-ui/react'
import { Link, Text, Input, Button } from 'src/components'
import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import { resetPasswordCall } from 'src/services/api/requests'
import * as Yup from 'yup'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const ResetPasswordScreen = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [searchParams] = useSearchParams()
  const mutation = useMutation((newUser) => resetPasswordCall(newUser), {
    onError: (error) => {
      toast({
        title: 'Falha na requisição.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: () => {
      toast({
        title: 'Senha salva com sucesso com sucesso!',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      navigate('/')
    }
  })
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .length(6, 'Token deve conter 6 caracteres')
        .required('Token é obrigatorio.'),
      password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres.')
        .required('Senha é obrigatoria.'),
      confirmPassword: Yup.string()
        .min(6, 'Confirmar a senha deve ter ao menos 6 caracteres.')
        .required('Confirmar a senha é obrigatorio.')
        .oneOf([Yup.ref('password'), null], 'Senha não são iguais.')
    }),
    onSubmit: (data) => {
      mutation.mutate({
        email: searchParams.get('email'),
        token: data.token,
        password: data.password
      })
    }
  })

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
          <Text.ScreenTitle mt="48px">Nova Senha</Text.ScreenTitle>
          <Text mt="24px">
            Digite o código enviado e uma nova senha nos campos abaixos:
          </Text>
          <Input
            id="token"
            name="token"
            value={values.token}
            onChange={handleChange}
            errors={errors.token}
            mt="24px"
            placeholder="Ex: 0000"
            maxLength={6}
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            errors={errors.password}
            mt="24px"
            placeholder="Nova Senha"
          />
          <Input.Password
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            errors={errors.confirmPassword}
            mt="24px"
            placeholder="Confirmar Nova Senha"
          />

          <Button
            isLoading={mutation.isLoading}
            onClick={handleSubmit}
            mb="12px"
            mt="24px"
          >
            Salvar
          </Button>
          <Link.Action
            mt="8px"
            text="Não recebeu o código?"
            actionText="Clique aqui para reenviar."
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
