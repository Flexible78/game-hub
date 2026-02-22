import { type FetchResponse, type Game } from '@/models/fetch-types'
import apiClient from '@/services/app-client'
import React from 'react'

const GameGrid = () => {
    const [games, setGames] = React.useState<Game[]>([])
    React.useEffect(() => {
        apiClient.get<FetchResponse>('games').then(res => setGames(res.data.results))
    },[])

    return (
        <ul>
            {games.map(g => <li key={g.id}>{g.name}</li>)}
        </ul>
    )
}

export default GameGrid
