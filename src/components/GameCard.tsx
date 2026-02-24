import { Card, Flex, HStack, Image } from '@chakra-ui/react'
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
            <Card.Body gap={{ base: 2, md: 3 }}>
                <Card.Title
                    fontSize={{ base: '1.5rem', md: '1.65rem', lg: '1.8rem', xl: '1.95rem', "2xl": '2.1rem' }}
                    lineHeight='1.15'
                    lineClamp={2}
                >
                    {game.name}
                </Card.Title>
                <Flex
                    direction={{ base: 'column', "2xl": 'row' }}
                    align={{ base: 'flex-start', "2xl": 'center' }}
                    justify='space-between'
                    gap={{ base: 2, lg: 2.5, "2xl": 3 }}
                >
                    <MetacriticBadge metacritic={game.metacritic} />
                    <PlatformList parentPlatforms={game.parent_platforms} />
                </Flex>
                <HStack justify='end' mt={{ base: 1, md: 0 }}>
                    <StarsRater rating={game.rating} />
                </HStack>
            </Card.Body>
        </Card.Root>
    )
}

export default GameCard
