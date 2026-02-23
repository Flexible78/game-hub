import { Center, SimpleGrid, Spinner } from '@chakra-ui/react'
import useGame from '@/services/hooks/useGame'
import GameCard from './GameCard'

const GameGrid = () => {
    const { data: games, isLoading } = useGame()

    if (isLoading) {
        return (
            <Center minH='40vh'>
                <Spinner size='xl' />
            </Center>
        )
    }

    return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6}>
            {games.map(game => <GameCard key={game.id} game={game} />)}
        </SimpleGrid>
    )
}

export default GameGrid
