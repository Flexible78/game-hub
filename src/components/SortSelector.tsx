import { Button, Menu, Portal } from '@chakra-ui/react'
import { useMemo, useState, type FC } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

type Props = {
    ordering: string | null
    onOrderingSelect: (ordering: string | null) => void
}

type SortOption = {
    label: string
    value: string | null
}

const sortOptions: SortOption[] = [
    { label: 'No Ordering', value: null },
    { label: 'Ordering by Release Date (descending order)', value: '-released' },
    { label: 'Ordering by Added Date (descending order)', value: '-added' },
    { label: 'Ordering by Updated Date (descending order)', value: '-updated' },
    { label: 'Ordering by Created Date (descending order)', value: '-created' },
    { label: 'Ordering by Rating (descending order)', value: '-rating' },
    { label: 'Ordering by Critic Score (descending order)', value: '-metacritic' },
    { label: 'Ordering by Name (ascending order)', value: 'name' },
]

const SortSelector: FC<Props> = ({ ordering, onOrderingSelect }) => {
    const [isOpen, setIsOpen] = useState(false)

    const buttonLabel = useMemo(() => {
        const selectedOption = sortOptions.find(option => option.value === ordering)
        return selectedOption?.label ?? 'No ordering'
    }, [ordering])

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
                        {sortOptions.map(option => (
                            <Menu.Item
                                key={option.value ?? 'none'}
                                value={option.value ?? 'none'}
                                onSelect={() => onOrderingSelect(option.value)}
                            >
                                {option.label}
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default SortSelector
