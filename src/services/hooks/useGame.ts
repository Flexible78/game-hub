import { Game } from "@/models/fetch-types";
import useData from "./useData";
import { GameQueryParams } from "@/models/GameQueryParams";

export default function useGame(
    gameQuery: GameQueryParams
): { data: Game[]; isLoading: boolean; error: string } {
    return useData<Game>(
        "games",
        { params: { genres: gameQuery.genreSlug } },
        [gameQuery.genreSlug]
    );
}
