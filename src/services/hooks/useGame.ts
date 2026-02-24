import type { Game } from '@/models/fetch-types'
import useData from '@/services/hooks/useData'

type UseGameResult = {
    data: Game[]
    isLoading: boolean
    error: string | null
}

export default function useGame(genre: string | null): UseGameResult {
    return useData<Game>('games', genre)
}
