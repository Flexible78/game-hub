import { create } from "zustand"

export type GameQuery = {
    genreSlug: string | null
    parentPlatformSlug: string | null
    searchStr: string | null
    orderings: string | null
    page: number
}

const defaultGameQuery: GameQuery = {
    genreSlug: null,
    parentPlatformSlug: null,
    searchStr: null,
    orderings: null,
    page: 1,
}

type GameQueryStore = GameQuery & {
    setGenreSlug: (genreSlug: string | null) => void
    setParentPlatformSlug: (parentPlatformSlug: string | null) => void
    setSearchStr: (searchStr: string | null) => void
    setOrderings: (orderings: string | null) => void
    setPage: (page: number) => void
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
        set((state) => (state.genreSlug === genreSlug ? state : { genreSlug, page: 1 })),
    setParentPlatformSlug: (parentPlatformSlug) =>
        set((state) =>
            state.parentPlatformSlug === parentPlatformSlug ? state : { parentPlatformSlug, page: 1 },
        ),
    setSearchStr: (searchStr) => {
        const normalizedSearch = normalizeSearch(searchStr)
        set((state) =>
            state.searchStr === normalizedSearch ? state : { searchStr: normalizedSearch, page: 1 },
        )
    },
    setOrderings: (orderings) =>
        set((state) => (state.orderings === orderings ? state : { orderings, page: 1 })),
    setPage: (page) =>
        set((state) => {
            const normalizedPage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1
            return state.page === normalizedPage ? state : { page: normalizedPage }
        }),
    resetGameQuery: () =>
        set((state) => {
            if (
                state.genreSlug === null &&
                state.parentPlatformSlug === null &&
                state.searchStr === null &&
                state.orderings === null &&
                state.page === 1
            ) {
                return state
            }

            return { ...defaultGameQuery }
        }),
}))

export default useGameQuery
