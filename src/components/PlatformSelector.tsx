import { useMemo, type FC } from 'react'
import usePlatform from '@/services/hooks/usePlatform'
import { useColorModeValue } from './ui/color-mode'
import MenuSelector, { type SelectorItem } from './MenuSelector'

type Props = {
    parentPlatformSlug: string | null
    onPlatformSelect: (platform: string | null) => void
}

const PlatformSelector: FC<Props> = ({ parentPlatformSlug, onPlatformSelect }) => {
    const { data: platforms } = usePlatform()
    const filterTextColor = useColorModeValue('#2a3f60', '#b2bfd3')

    const buttonLabel = useMemo(() => {
        const selectedPlatform = platforms.find(platform => String(platform.id) === parentPlatformSlug)
        return selectedPlatform?.name ?? 'Platforms'
    }, [platforms, parentPlatformSlug])

    const menuItems: SelectorItem[] = useMemo(() => {
        return platforms.map(platform => ({
            value: String(platform.id),
            label: platform.name,
        }))
    }, [platforms])

    return (
        <MenuSelector
            buttonLabel={buttonLabel}
            items={menuItems}
            onSelect={onPlatformSelect}
            defaultItemLabel='Platforms'
            textColor={filterTextColor}
        />
    )
}

export default PlatformSelector
