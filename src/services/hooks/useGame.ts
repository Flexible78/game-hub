import type { Game } from "@/models/fetch-types"
import useGameQuery from "@/services/hooks/useGameQuery"
import useData from "./useData"

type UseGameResult = {
    data: Game[]
    isLoading: boolean
    error: string
}

export default function useGame(): UseGameResult {
    const { genreSlug, parentPlatformSlug, orderings, searchStr } = useGameQuery()

    return useData<Game>("games", {
        params: {
            genres: genreSlug ?? undefined,
            parent_platforms: parentPlatformSlug ?? undefined,
            ordering: orderings ?? undefined,
            search: searchStr ?? undefined,
        },
    })
}
