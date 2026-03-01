import { Box, Center, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import useGame from '@/services/hooks/useGame'
import GameCard from './GameCard'
import { useColorModeValue } from './ui/color-mode'
import useGameQuery from '@/services/hooks/useGameQuery'
import GamePagination from './GamePagination'

const GameGrid = () => {
    const { data: games, totalCount, isLoading, error } = useGame()
    const page = useGameQuery((state) => state.page)
    const setPage = useGameQuery((state) => state.setPage)
    const scrollbarThumb = useColorModeValue('rgba(91, 113, 146, 0.55)', 'rgba(73, 93, 121, 0.78)')
    const scrollbarTrack = useColorModeValue('rgba(219, 228, 241, 0.42)', 'rgba(18, 29, 44, 0.76)')

    if (isLoading) {
        return (
            <Center minH='30vh'>
                <Spinner size='xl' />
            </Center>
        )
    }

    if (error) {
        return (
            <Text color='red.500' fontSize='2rem' fontWeight='bold'>
                {error}
            </Text>
        )
    }

    if (games.length === 0) {
        return (
            <Center minH='30vh'>
                <Text color='gray.400' fontSize={{ base: '1rem', md: '1.1rem' }}>
                    No games found for the selected filters. Try clearing search or changing platform/genre.
                </Text>
            </Center>
        )
    }

    return (
        <Box>
            <SimpleGrid
                columns={{ base: 1, sm: 1, md: 2, '2xl': 3 }}
                columnGap={{ base: 3, md: 4, '2xl': 5 }}
                rowGap={{ base: 6, md: 8, '2xl': 10 }}
                maxH='80vh'
                overflow='auto'
                p={{ base: 2, sm: 2, md: 3, '2xl': 4 }}
                css={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: `${scrollbarThumb} ${scrollbarTrack}`,
                    '&::-webkit-scrollbar': {
                        width: '5px',
                        height: '5px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: scrollbarTrack,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: scrollbarThumb,
                        borderRadius: '9999px',
                    },
                }}
            >
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
            <Box mt={8}>
                <GamePagination page={page} totalCount={totalCount} pageSize={20} onPageChange={setPage} />
            </Box>
        </Box>
    )
}

export default GameGrid
