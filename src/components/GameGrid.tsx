import { type FetchResponse, type Game } from '@/models/fetch-types'
import apiClient from '@/services/app-client'
import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import GameCard from './GameCard'

const GameGrid = () => {
    const [games, setGames] = React.useState<Game[]>([])
    React.useEffect(() => {
        apiClient.get<FetchResponse>('games').then(res => setGames(res.data.results))
    },[])

    return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6}>
            {games.map(game => <GameCard key={game.id} game={game} />)}
        </SimpleGrid>
    )
}

export default GameGrid
