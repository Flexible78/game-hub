import { Badge, Card, HStack, Image, Text } from '@chakra-ui/react'
import { type Game } from '@/models/fetch-types'


type Props = {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card.Root overflow='hidden' h='100%'>
            <Image src={game.background_image ?? undefined} alt={game.name} h='180px' objectFit='cover' />
            <Card.Body gap='3'>
                <Card.Title>{game.name}</Card.Title>
                <HStack justify='space-between'>
                    <Badge colorPalette='green' variant='subtle'>
                        Metacritic: {game.metacritic ?? 'N/A'}
                    </Badge>
                    <Text fontWeight='semibold'>Rate: {game.rating.toFixed(1)}</Text>
                </HStack>
            </Card.Body>
        </Card.Root>
    )
}

export default GameCard
