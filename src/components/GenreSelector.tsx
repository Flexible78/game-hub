import { memo, useCallback, useMemo, type FC } from 'react'
import useGenre from '@/services/hooks/useGenre'
import MenuSelector from './MenuSelector'
import type { MenuItem } from '@/models/MenuItem'

type Props = {
    genreSlug: string | null
    onGenreSelect: (genre: string | null) => void
}

const GenreSelector: FC<Props> = ({ genreSlug, onGenreSelect }) => {
    const { data: genres } = useGenre()
    const menuItems: MenuItem[] = useMemo(() => {
        return genres.map(genre => ({
            id: genre.id,
            value: genre.slug,
            name: genre.name,
        }))
    }, [genres])
    const handleItemSelect = useCallback(
        (item: MenuItem | null) => onGenreSelect(item?.value ?? null),
        [onGenreSelect],
    )

    return (
        <MenuSelector
            selectedItemValue={genreSlug}
            items={menuItems}
            onItemSelect={handleItemSelect}
            defaultName='Genres'
        />
    )
}

export default memo(GenreSelector)
