import { memo, useCallback, useMemo, type FC } from 'react'
import useGenre from '@/services/hooks/useGenre'
import MenuSelector from './MenuSelector'
import type { MenuItem } from '@/models/MenuItem'
import useGameQuery from '@/services/hooks/useGameQuery'

const GenreSelector: FC = () => {
    const { data: genres } = useGenre()
    const selectedGenreSlug = useGameQuery((state) => state.genreSlug)
    const setGenreSlug = useGameQuery((state) => state.setGenreSlug)

    const menuItems: MenuItem[] = useMemo(() => {
        return genres.map(genre => ({
            id: genre.id,
            value: genre.slug,
            name: genre.name,
        }))
    }, [genres])
    const handleItemSelect = useCallback((item: MenuItem | null) => {
        setGenreSlug(item?.value ?? null)
    }, [setGenreSlug])

    return (
        <MenuSelector
            selectedItemValue={selectedGenreSlug}
            items={menuItems}
            onItemSelect={handleItemSelect}
            defaultName='Genres'
        />
    )
}

export default memo(GenreSelector)
