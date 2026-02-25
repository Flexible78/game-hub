import { useMemo, type FC } from 'react'
import useGenre from '@/services/hooks/useGenre'
import MenuSelector from './MenuSelector'
import type { MenuItem } from '@/models/MenuItem'

type Props = {
    genreSlug: string | null
    onGenreSelect: (genre: string | null) => void
}

const GenreSelector: FC<Props> = ({ genreSlug, onGenreSelect }) => {
    // retrieve data from hook
    const { data: genres } = useGenre()

    // calculate button label
    const buttonLabel = useMemo(() => {
        const selectedGenre = genres.find(genre => genre.slug === genreSlug)
        return selectedGenre?.name ?? 'Genres'
    }, [genres, genreSlug])

    // transform API data to universal MenuItem[]
    const menuItems: MenuItem[] = useMemo(() => {
        return genres.map(genre => ({
            id: genre.id,
            value: genre.slug,
            name: genre.name,
        }))
    }, [genres])

    // call component MenuSelector
    return (
        <MenuSelector
            buttonLabel={buttonLabel}
            items={menuItems}
            onSelect={onGenreSelect}
            defaultItemLabel="Genres"
        />
    )
}

export default GenreSelector
