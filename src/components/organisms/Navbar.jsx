import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, UserMenu } from 'src/components/molecules'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { UserModal } from './UserModal'

export const NavBar = ({ query, setQuery }) => {
  const [showModal, setShowModal] = useState()
  const navigate = useNavigate()

  const onCloseModal = () => {
    setShowModal(null)
  }
  return (
    <Flex
      w="100vw"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['24px', '48px', '80px', '112px']}
      paddingTop={['24px']}
    >
      <Image
        src="/img/logo.svg"
        alt="book club logo"
        w={['100px', '160px']}
        h="48px"
        cursor="pointer"
        onClick={() => navigate('/home')}
      ></Image>
      <Flex display={['none', 'flex']}>
        <SearchBar query={query} setQuery={setQuery} />
      </Flex>
      <UserMenu setShowModal={setShowModal} />
      {showModal === 'user' && <UserModal onCLose={onCloseModal} />}
    </Flex>
  )
}
