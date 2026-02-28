import { create } from "zustand"

export type GameQuery = {
    genreSlug: string | null
    parentPlatformSlug: string | null
    searchStr: string | null
    orderings: string | null
}

const defaultGameQuery: GameQuery = {
    genreSlug: null,
    parentPlatformSlug: null,
    searchStr: null,
    orderings: null,
}

type GameQueryStore = GameQuery & {
    setGenreSlug: (genreSlug: string | null) => void
    setParentPlatformSlug: (parentPlatformSlug: string | null) => void
    setSearchStr: (searchStr: string | null) => void
    setOrderings: (orderings: string | null) => void
    resetGameQuery: () => void
}

const normalizeSearch = (searchStr: string | null): string | null => {
    if (searchStr === null) {
        return null
    }

    const normalizedSearch = searchStr.trim()
    return normalizedSearch.length > 0 ? normalizedSearch : null
}

const useGameQuery = create<GameQueryStore>((set) => ({
    ...defaultGameQuery,
    setGenreSlug: (genreSlug) =>
        set((state) => (state.genreSlug === genreSlug ? state : { genreSlug })),
    setParentPlatformSlug: (parentPlatformSlug) =>
        set((state) =>
            state.parentPlatformSlug === parentPlatformSlug ? state : { parentPlatformSlug },
        ),
    setSearchStr: (searchStr) => {
        const normalizedSearch = normalizeSearch(searchStr)
        set((state) => (state.searchStr === normalizedSearch ? state : { searchStr: normalizedSearch }))
    },
    setOrderings: (orderings) =>
        set((state) => (state.orderings === orderings ? state : { orderings })),
    resetGameQuery: () =>
        set((state) => {
            if (
                state.genreSlug === null &&
                state.parentPlatformSlug === null &&
                state.searchStr === null &&
                state.orderings === null
            ) {
                return state
            }

            return { ...defaultGameQuery }
        }),
}))

export default useGameQuery
