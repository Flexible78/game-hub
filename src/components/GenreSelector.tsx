import { Button, Menu, Portal } from '@chakra-ui/react'
import { useMemo, useState, type FC } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import useGenre from '@/services/hooks/useGenre'

type Props = {
    genreSlug: string | null
    onGenreSelect: (genre: string | null) => void
}

const GenreSelector: FC<Props> = ({ genreSlug, onGenreSelect }) => {
    const { data: genres } = useGenre()
    const [isOpen, setIsOpen] = useState(false)

    const buttonLabel = useMemo(() => {
        const selectedGenre = genres.find(genre => genre.slug === genreSlug)
        return selectedGenre?.name ?? 'Genres'
    }, [genres, genreSlug])

    return (
        <Menu.Root open={isOpen} onOpenChange={(details) => setIsOpen(details.open)}>
            <Menu.Trigger asChild>
                <Button variant='outline' mb={4}>
                    {buttonLabel}
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value='all-genres' onSelect={() => onGenreSelect(null)}>
                            Genres
                        </Menu.Item>
                        {genres.map(genre => (
                            <Menu.Item
                                key={genre.id}
                                value={genre.slug}
                                onSelect={() => onGenreSelect(genre.slug)}
                            >
                                {genre.name}
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default GenreSelector
