export type Platform = {
    id: number,
    name: string,
    slug: string
}

export type ParentPlatform = {
    platform: Platform
}
export type Genre = {
    id: number,
    name: string,
    slug: string,
    games_count: number,
    image_background: string
}

export type Game = {
    id: number,
    name: string,
    background_image: string | null,
    metacritic: number | null,
    rating: number,
    parent_platforms: ParentPlatform[]
}

export type FetchResponse<T> = {
    count: number
    next: string | null
    previous: string | null
    results: T[]
}
