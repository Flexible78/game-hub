import { memo, useCallback, useMemo, type FC } from 'react'
import usePlatform from '@/services/hooks/usePlatform'
import { useColorModeValue } from './ui/color-mode'
import MenuSelector from './MenuSelector'
import type { MenuItem } from '@/models/MenuItem'
import useGameQuery from '@/services/hooks/useGameQuery'

const PlatformSelector: FC = () => {
    const { data: platforms } = usePlatform()
    const selectedPlatformSlug = useGameQuery((state) => state.parentPlatformSlug)
    const setParentPlatformSlug = useGameQuery((state) => state.setParentPlatformSlug)
    const filterTextColor = useColorModeValue('#2a3f60', '#b2bfd3')

    const menuItems: MenuItem[] = useMemo(() => {
        return platforms
            .filter((platform) => {
                const normalizedName = platform.name.trim().toLowerCase()
                return (
                    platform.id !== -1 &&
                    platform.slug !== 'platforms' &&
                    normalizedName !== 'all platforms' &&
                    normalizedName !== 'platforms'
                )
            })
            .map(platform => ({
                id: platform.id,
                value: String(platform.id),
                name: platform.name,
            }))
    }, [platforms])
    const handleItemSelect = useCallback((item: MenuItem | null) => {
        setParentPlatformSlug(item?.value ?? null)
    }, [setParentPlatformSlug])

    return (
        <MenuSelector
            selectedItemValue={selectedPlatformSlug}
            items={menuItems}
            onItemSelect={handleItemSelect}
            defaultName='Platforms'
            textColor={filterTextColor}
        />
    )
}

export default memo(PlatformSelector)
