import { memo, useCallback, useMemo, type FC } from 'react'
import useGenre from '@/services/hooks/useGenre'
import MenuSelector from './MenuSelector'
import type { MenuItem } from '@/models/MenuItem'
import useGameQuery from '@/services/hooks/useGameQuery'

type Props = {
    genreSlug?: string | null
    onGenreSelect?: (genre: string | null) => void
}

const GenreSelector: FC<Props> = ({ genreSlug, onGenreSelect }) => {
    const { data: genres } = useGenre()
    const selectedGenreSlug = useGameQuery((state) => state.genreSlug)
    const setGenreSlug = useGameQuery((state) => state.setGenreSlug)
    const activeGenreSlug = genreSlug ?? selectedGenreSlug
    const handleGenreSelect = onGenreSelect ?? setGenreSlug

    const menuItems: MenuItem[] = useMemo(() => {
        return genres.map(genre => ({
            id: genre.id,
            value: genre.slug,
            name: genre.name,
        }))
    }, [genres])
    const handleItemSelect = useCallback((item: MenuItem | null) => {
        handleGenreSelect(item?.value ?? null)
    }, [handleGenreSelect])

    return (
        <MenuSelector
            selectedItemValue={activeGenreSlug}
            items={menuItems}
            onItemSelect={handleItemSelect}
            defaultName='Genres'
        />
    )
}

export default memo(GenreSelector)
