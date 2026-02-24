import { Game } from "@/models/fetch-types";
import useData from "./useData";
import { GameQueryParams } from "@/models/GameQueryParams";

export default function useGame(
    gameQuery: GameQueryParams
): { data: Game[]; isLoading: boolean; error: string } {
    return useData<Game>(
        "games",
        {
            params: {
                genres: gameQuery.genreSlug ?? undefined,
                parent_platforms: gameQuery.parentPlatformSlug ?? undefined,
                search: gameQuery.searchStr ?? undefined,
                ordering: gameQuery.orderings ?? undefined
            }
        },
        [gameQuery.genreSlug, gameQuery.parentPlatformSlug, gameQuery.searchStr, gameQuery.orderings]
    );
}
