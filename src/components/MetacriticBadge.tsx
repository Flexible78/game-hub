import { Badge } from '@chakra-ui/react'

type Props = {
    metacritic: number | null
}

const MetacriticBadge = ({ metacritic }: Props) => {
    const isHighScore = metacritic !== null && metacritic > 89

    return (
        <Badge
            bg={isHighScore ? 'green.500' : 'lightgray'}
            color={isHighScore ? 'white' : 'black'}
            fontSize={{ base: '0.9rem', md: '1rem' }}
            px={{ base: 2, md: 2.5 }}
            py={0.5}
            borderRadius='md'
        >
            Metacritic: {metacritic ?? 'N/A'}
        </Badge>
    )
}

export default MetacriticBadge
