import { Box, HStack, Image } from '@chakra-ui/react'
import logo from "/image.png"
import React from 'react'
import { ColorModeButton, useColorModeValue } from './ui/color-mode'

const Nav: React.FC = () => {
  const logoContainerBg = useColorModeValue('rgba(255, 255, 255, 0.72)', 'rgba(12, 17, 27, 0.55)')
  const logoBorder = useColorModeValue('#d6e2f6', '#2e3b50')
  const buttonColor = useColorModeValue('#596f90', '#a9bddc')

  return (
    <HStack justifyContent={"space-between"} px={5} py={3}>
            <Box
              p={1.5}
              rounded="lg"
              bg={logoContainerBg}
              borderWidth="1px"
              borderColor={logoBorder}
            >
              <Image src={logo} boxSize={"8"} />
            </Box>
            <ColorModeButton color={buttonColor} />
    </HStack>
  )
}

export default Nav
