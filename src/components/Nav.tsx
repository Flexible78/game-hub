import { HStack, Image } from '@chakra-ui/react'
import logo from "/image.png"
import React from 'react'
import { ColorModeButton } from './ui/color-mode'

const Nav: React.FC = () => {
  return (
    <HStack justifyContent={"space-between"} px={4} py={2}>
            <Image src={logo} boxSize={"10"}/>
            <ColorModeButton/>
    </HStack>
  )
}

export default Nav
