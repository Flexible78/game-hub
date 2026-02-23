import { Badge } from '@chakra-ui/react'

type Props = {
    metacritic: number | null
}

const MetacriticBadge = ({ metacritic }: Props) => {
    const isHighScore = metacritic !== null && metacritic > 89

    return (
        <Badge bg={isHighScore ? 'green.500' : 'lightgray'} color={isHighScore ? 'white' : 'black'}>
            Metacritic: {metacritic ?? 'N/A'}
        </Badge>
    )
}

export default MetacriticBadge
