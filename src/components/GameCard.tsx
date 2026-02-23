import { Card, HStack, Image } from '@chakra-ui/react'
import { type Game } from '@/models/fetch-types'
import StarsRater from './StarsRater'
import MetacriticBadge from './MetacriticBadge'
import PlatformList from './PlatformList'


type Props = {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card.Root overflow='hidden' h='100%'>
            <Image src={game.background_image ?? undefined} alt={game.name} w='100%' aspectRatio={16 / 9} objectFit='cover' />
            <Card.Body gap='3'>
                <Card.Title>{game.name}</Card.Title>
                <HStack justify='space-between'>
                    <MetacriticBadge metacritic={game.metacritic} />
                    <PlatformList parentPlatforms={game.parent_platforms} />
                </HStack>
                <HStack justify='end'>
                    <StarsRater rating={game.rating} />
                </HStack>
            </Card.Body>
        </Card.Root>
    )
}

export default GameCard
