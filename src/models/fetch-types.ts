export type Game = {
    id: number,
    name: string,
    background_image: string | null,
    metacritic: number | null,
    rating: number
}

export type FetchResponse = {
    results: Game[]
}
