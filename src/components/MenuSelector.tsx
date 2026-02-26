import { memo, type FC, useMemo, useState } from 'react'
import { Button, Menu, Portal } from '@chakra-ui/react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import type { MenuItem } from '@/models/MenuItem'


type Props = {
    selectedItemValue: string | null
    items: MenuItem[]
    onItemSelect: (item: MenuItem | null) => void
    defaultName: string
    showDefaultItem?: boolean
    textColor?: string
}

const MenuSelector: FC<Props> = ({
    selectedItemValue,
    items,
    onItemSelect,
    defaultName,
    showDefaultItem = true,
    textColor,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const closeMenu = () => setIsOpen(false)
    const selectedItem = useMemo(
        () => items.find(item => item.value === selectedItemValue) ?? null,
        [items, selectedItemValue],
    )
    const buttonLabel = selectedItem?.name ?? defaultName

    return (
        <Menu.Root open={isOpen} onOpenChange={(details) => setIsOpen(details.open)}>
            <Menu.Trigger asChild>
                <Button variant='outline' mb={4} color={textColor}>
                    {buttonLabel}
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content onPointerLeave={closeMenu}>
                        {showDefaultItem && (
                            <Menu.Item value='__default__' onSelect={() => onItemSelect(null)}>
                                {defaultName}
                            </Menu.Item>
                        )}

                        {items.map((item, index) => (
                            <Menu.Item
                                key={`${item.id}-${item.value ?? 'null'}-${index}`}
                                value={item.value ?? `none-${item.id}-${index}`}
                                onSelect={() => onItemSelect(item)}
                            >
                                {item.name}
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default memo(MenuSelector)
