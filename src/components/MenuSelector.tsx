import { type FC, useState } from 'react'
import { Button, Menu, Portal } from '@chakra-ui/react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import type { MenuItem } from '@/models/MenuItem'


type Props = {
    buttonLabel: string
    items: MenuItem[]
    onSelect: (value: string | null) => void
    defaultItemLabel?: string
    textColor?: string
}

const MenuSelector: FC<Props> = ({ buttonLabel, items, onSelect, defaultItemLabel, textColor }) => {
    const [isOpen, setIsOpen] = useState(false)

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
                    <Menu.Content>
                        {defaultItemLabel && (
                            <Menu.Item value='__default__' onSelect={() => onSelect(null)}>
                                {defaultItemLabel}
                            </Menu.Item>
                        )}

                        {items.map((item, index) => (
                            <Menu.Item
                                key={`${item.id}-${item.value ?? 'null'}-${index}`}
                                value={item.value ?? `none-${item.id}-${index}`}
                                onSelect={() => onSelect(item.value)}
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

export default MenuSelector
