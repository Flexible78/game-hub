import { Game } from "@/models/fetch-types"
import useData from "./useData"
import useGameQuery from "./useGameQuery"

export default function useGame(): { data: Game[]; isLoading: boolean; error: string } {
    const genreSlug = useGameQuery((state) => state.genreSlug)
    const parentPlatformSlug = useGameQuery((state) => state.parentPlatformSlug)
    const searchStr = useGameQuery((state) => state.searchStr)
    const orderings = useGameQuery((state) => state.orderings)

    return useData<Game>(
        "games",
        {
            params: {
                genres: genreSlug ?? undefined,
                parent_platforms: parentPlatformSlug ?? undefined,
                search: searchStr ?? undefined,
                ordering: orderings ?? undefined,
            },
        },
        [genreSlug, parentPlatformSlug, searchStr, orderings],
    )
}
