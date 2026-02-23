import type { Genre } from '@/models/fetch-types'
import useData from '@/services/hooks/useData'

type UseGenreResult = {
    data: Genre[]
    isLoading: boolean
    error: string | null
}

export default function useGenre(): UseGenreResult {
    return useData<Genre>('genres')
}
