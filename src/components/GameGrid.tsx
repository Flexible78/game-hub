import { Center, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import useGame from '@/services/hooks/useGame'
import GameCard from './GameCard'

type Props = {
    selectedGenre: string | null
}

const GameGrid = ({ selectedGenre }: Props) => {
    const { data: games, isLoading, error } = useGame({
        genreSlug: selectedGenre,
        parentPlatformSlug: null,
        searchStr: null,
        orderings: null,
    })

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

    return (
        <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            columnGap={5}
            rowGap={12}
            maxH='80vh'
            overflow='auto'
            p={{ base: 4, sm: 1, md: 5 }}
        >
            {games.map(game => <GameCard key={game.id} game={game} />)}
        </SimpleGrid>
    )
}

export default GameGrid
