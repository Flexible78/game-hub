import { Box, HStack, Image } from '@chakra-ui/react'
import logo from "/image.png"
import React, { memo } from 'react'
import { ColorModeButton, useColorModeValue } from './ui/color-mode'
import SearchBar from './SearchBar'
import useGameQuery from '@/services/hooks/useGameQuery'

type Props = {
    onLogoClick?: () => void
    onSearch?: (searchText: string) => void
}

const Nav: React.FC<Props> = ({ onLogoClick, onSearch }) => {
  const buttonColor = useColorModeValue('#596f90', '#a9bddc')
  const resetGameQuery = useGameQuery((state) => state.resetGameQuery)
  const handleLogoClick = onLogoClick ?? resetGameQuery
  const logoFilter = useColorModeValue(
    'drop-shadow(0 2px 8px rgba(65, 91, 128, 0.28))',
    'drop-shadow(0 2px 8px rgba(103, 131, 176, 0.28))',
  )

  return (
    <HStack justifyContent={"space-between"} px={4} py={1} gap={3}>
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
              onClick={handleLogoClick}
            >
              <Image src={logo} boxSize={{ base: "7", md: "8" }} filter={logoFilter} />
            </Box>
            <Box flex='1' maxW='520px'>
                <SearchBar onSubmitSearchText={onSearch} />
            </Box>
            <ColorModeButton color={buttonColor} />
    </HStack>
  )
}

export default memo(Nav)
