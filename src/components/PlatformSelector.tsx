import { Button, Menu, Portal } from '@chakra-ui/react'
import { useMemo, useState, type FC } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import usePlatform from '@/services/hooks/usePlatform'
import { useColorModeValue } from './ui/color-mode'

type Props = {
    parentPlatformSlug: string | null
    onPlatformSelect: (platform: string | null) => void
}

const PlatformSelector: FC<Props> = ({ parentPlatformSlug, onPlatformSelect }) => {
    const { data: platforms } = usePlatform()
    const [isOpen, setIsOpen] = useState(false)
    const filterTextColor = useColorModeValue('#2a3f60', '#b2bfd3')

    const buttonLabel = useMemo(() => {
        const selectedPlatform = platforms.find(platform => String(platform.id) === parentPlatformSlug)
        return selectedPlatform?.name ?? 'Platforms'
    }, [platforms, parentPlatformSlug])

    return (
        <Menu.Root open={isOpen} onOpenChange={(details) => setIsOpen(details.open)}>
            <Menu.Trigger asChild>
                <Button variant='outline' mb={4} color={filterTextColor}>
                    {buttonLabel}
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value='all-platforms' onSelect={() => onPlatformSelect(null)}>
                            Platforms
                        </Menu.Item>
                        {platforms.map(platform => (
                            <Menu.Item
                                key={platform.id}
                                value={String(platform.id)}
                                onSelect={() => onPlatformSelect(String(platform.id))}
                            >
                                {platform.name}
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default PlatformSelector
