import { useMemo, type FC } from 'react'
import { useColorModeValue } from './ui/color-mode'
import MenuSelector, { type SelectorItem } from './MenuSelector'

type Props = {
    ordering: string | null
    onOrderingSelect: (ordering: string | null) => void
}

type SortOption = SelectorItem

const sortOptions: SortOption[] = [
    { label: 'No Ordering', value: null },
    { label: 'Ordering by Release Date (descending order)', value: '-released' },
    { label: 'Ordering by Added Date (descending order)', value: '-added' },
    { label: 'Ordering by Updated Date (descending order)', value: '-updated' },
    { label: 'Ordering by Created Date (descending order)', value: '-created' },
    { label: 'Ordering by Rating (descending order)', value: '-rating' },
    { label: 'Ordering by Critic Core (descending order)', value: '-metacritic' },
    { label: 'Ordering by Name (ascending order)', value: 'name' },
]

const SortSelector: FC<Props> = ({ ordering, onOrderingSelect }) => {
    const filterTextColor = useColorModeValue('#2a3f60', '#b2bfd3')

    const buttonLabel = useMemo(() => {
        const selectedOption = sortOptions.find(option => option.value === ordering)
        return selectedOption?.label ?? 'No Ordering'
    }, [ordering])

    return (
        <MenuSelector
            buttonLabel={buttonLabel}
            items={sortOptions}
            onSelect={onOrderingSelect}
            textColor={filterTextColor}
        />
    )
}

export default SortSelector
