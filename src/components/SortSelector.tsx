import { memo, useCallback, useMemo, type FC } from 'react'
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

    const menuItems: MenuItem[] = useMemo(() => {
        return sortOptions.map(option => ({
            id: option.id,
            value: option.value,
            name: option.value ? `Ordering ${option.name}` : option.name,
        }))
    }, [sortOptions])
    const handleItemSelect = useCallback(
        (item: MenuItem | null) => onOrderingSelect(item?.value ?? null),
        [onOrderingSelect],
    )

    return (
        <MenuSelector
            selectedItemValue={ordering}
            items={menuItems}
            onItemSelect={handleItemSelect}
            defaultName='No Ordering'
            showDefaultItem={false}
            textColor={filterTextColor}
        />
    )
}

export default memo(SortSelector)
