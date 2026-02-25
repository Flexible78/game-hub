import { useMemo, type FC } from 'react'
import { useColorModeValue } from './ui/color-mode'
import MenuSelector from './MenuSelector'
import useSortOption from '@/services/hooks/useSortOption'
import type { MenuItem } from '@/models/MenuItem'

type Props = {
    ordering: string | null
    onOrderingSelect: (ordering: string | null) => void
}

const SortSelector: FC<Props> = ({ ordering, onOrderingSelect }) => {
    const filterTextColor = useColorModeValue('#2a3f60', '#b2bfd3')
    const sortOptions = useSortOption()

    const buttonLabel = useMemo(() => {
        const selectedOption = sortOptions.find(option => option.value === ordering)
        if (!selectedOption) return 'No Ordering'
        return selectedOption.value ? `Ordering ${selectedOption.name}` : selectedOption.name
    }, [ordering, sortOptions])

    const menuItems: MenuItem[] = useMemo(() => {
        return sortOptions.map(option => ({
            id: option.id,
            value: option.value,
            name: option.value ? `Ordering ${option.name}` : option.name,
        }))
    }, [sortOptions])

    return (
        <MenuSelector
            buttonLabel={buttonLabel}
            items={menuItems}
            onSelect={onOrderingSelect}
            textColor={filterTextColor}
        />
    )
}

export default SortSelector
