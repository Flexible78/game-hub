import { memo, useCallback, useMemo, type FC } from 'react'
import { useColorModeValue } from './ui/color-mode'
import MenuSelector from './MenuSelector'
import useSortOption from '@/services/hooks/useSortOption'
import type { MenuItem } from '@/models/MenuItem'
import useGameQuery from '@/services/hooks/useGameQuery'

const SortSelector: FC = () => {
    const filterTextColor = useColorModeValue('#2a3f60', '#b2bfd3')
    const selectedOrdering = useGameQuery((state) => state.orderings)
    const setOrderings = useGameQuery((state) => state.setOrderings)
    const sortOptions = useSortOption()

    const menuItems: MenuItem[] = useMemo(() => {
        return sortOptions.map(option => ({
            id: option.id,
            value: option.value,
            name: option.value ? `Ordering ${option.name}` : option.name,
        }))
    }, [sortOptions])
    const handleItemSelect = useCallback((item: MenuItem | null) => {
        setOrderings(item?.value ?? null)
    }, [setOrderings])

    return (
        <MenuSelector
            selectedItemValue={selectedOrdering}
            items={menuItems}
            onItemSelect={handleItemSelect}
            defaultName='No Ordering'
            showDefaultItem={false}
            textColor={filterTextColor}
        />
    )
}

export default memo(SortSelector)
