import { Avatar, Menu, MenuList, MenuButton, Flex } from '@chakra-ui/react'
import { BsBookmarkHeart } from 'react-icons/bs'
import { BiUser, BiCheckShield } from 'react-icons/bi'
import {
  HiOutlineClipboard,
  HiOutlineLogout,
  HiOutlineDocumentText
} from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { Text, MenuItem } from 'src/components/atoms'

export const UserMenu = ({ setShowModal }) => {
  const navigate = useNavigate()
  const userStore = useSelector((state) => state.user)
  const menuOptions = [
    {
      id: 0,
      icon: BsBookmarkHeart,
      text: 'Favoritos',
      divider: false,
      onClick: () => navigate('/favorites')
    },
    {
      id: 1,
      icon: BiUser,
      text: 'Dados Pessoais',
      divider: false,
      onClick: () => setShowModal('user')
    },
    {
      id: 2,
      icon: BiCheckShield,
      text: 'Alterar Senha',
      divider: true,
      onClick: () => setShowModal('password')
    },
    {
      id: 3,
      icon: HiOutlineDocumentText,
      text: 'Termo de Uso',
      divider: false,
      onClick: () => navigate('/')
    },
    {
      id: 4,
      icon: HiOutlineClipboard,
      text: 'Politica de Privacidade',
      divider: true,
      onClick: () => setShowModal('privacy-policy')
    },
    {
      id: 5,
      icon: HiOutlineLogout,
      text: 'Logout',
      divider: false,
      onClick: () => navigate('/')
    }
  ]
  return (
    <Menu>
      <MenuButton>
        <Flex alignItems="center" justifyContent="center" flexDir="row">
          <Avatar
            w={['36px', '48px']}
            h={['36px', '48px']}
            src={userStore?.user.avatar_url}
            name={userStore?.user.name}
            borderWidth="2px"
            borderColor="brand.primary"
            bg="brand.greyLight"
            mr={['6px', '12px']}
          />
          <Flex display={['none', 'flex']}>
            <Text fontWeight="bold" maxLength="40px">
              {userStore?.user.name}
            </Text>
          </Flex>
          <ChevronDownIcon boxSize="24px" />
        </Flex>
      </MenuButton>
      <MenuList>
        {menuOptions.map((item) => (
          <MenuItem
            onClick={() => item.onClick()}
            key={`menu_item_${item.id}`}
            {...item}
          />
        ))}
      </MenuList>
    </Menu>
  )
}
