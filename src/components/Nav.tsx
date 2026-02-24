import { Box, HStack, Image } from '@chakra-ui/react'
import logo from "/image.png"
import React from 'react'
import { ColorModeButton, useColorModeValue } from './ui/color-mode'

type Props = {
  onLogoClick: () => void
}

const Nav: React.FC<Props> = ({ onLogoClick }) => {
  const buttonColor = useColorModeValue('#596f90', '#a9bddc')
  const logoFilter = useColorModeValue(
    'drop-shadow(0 2px 8px rgba(65, 91, 128, 0.28))',
    'drop-shadow(0 2px 8px rgba(103, 131, 176, 0.28))',
  )

  return (
    <HStack justifyContent={"space-between"} px={4} py={1}>
            <Box
              as="button"
              p={0}
              bg="transparent"
              borderWidth="0"
              lineHeight="0"
              cursor="pointer"
              transition="opacity 0.2s ease, filter 0.2s ease"
              _hover={{ opacity: 0.82, filter: 'brightness(0.88)' }}
              _focusVisible={{ outline: '2px solid', outlineColor: buttonColor, outlineOffset: '2px' }}
              aria-label="Reset all filters"
              onClick={onLogoClick}
            >
              <Image src={logo} boxSize={{ base: "7", md: "8" }} filter={logoFilter} />
            </Box>
            <ColorModeButton color={buttonColor} />
    </HStack>
  )
}

export default Nav
