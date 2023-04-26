import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Avatar
} from '@chakra-ui/react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Input } from 'src/components/molecules'
import { Text, Button } from 'src/components/atoms'
import { useSelector } from 'react-redux'
export const UserModal = ({ onClose }) => {
  const userStore = useSelector((state) => state.user)
  const { values, handleChange, errors } = useFormik({
    initialValues: {
      name: userStore?.user.name,
      email: userStore?.user.email
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Nome deve ter ao menos 3 caracteres.')
        .required('Nome é obrigatório.'),
      email: Yup.string()
        .email('E-mail inválido.')
        .required('E-mail é obrigatório.')
    })
  })
  return (
    <Drawer
      size={['100%', 'sm']}
      isOpen={true}
      placement="right"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Dados Pessoais</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody>
          <Flex alignItems="center" justifyContent="center" w="100%">
            <Avatar
              w="100px"
              h="100px"
              src={userStore?.user.avatar_url}
              name={userStore?.user.name}
              borderWidth="4px"
              borderColor="brand.primary"
              bg="brand.greyLight"
            />
          </Flex>
          <Input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            mt="24px"
            placeholder="Nome completo"
          />
          <Input
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            mt="16px"
            placeholder="E-mail"
          />
          <Button w="100%" mt={['64px']}>
            Atualizar
          </Button>
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
