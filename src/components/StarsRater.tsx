import { HStack } from '@chakra-ui/react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

type Props = {
    rating: number
}

const starsCount = 5

const StarsRater = ({ rating }: Props) => {
    const integerPart = Math.floor(rating)
    const fractionPart = rating - integerPart

    return (
        <HStack gap='1' color='yellow.400'>
            {Array.from({ length: starsCount }, (_, index) => {
                if (index < integerPart) return <FaStar key={index} />

                if (index === integerPart) {
                    if (fractionPart < 0.25) return <FaRegStar key={index} />
                    if (fractionPart <= 0.75) return <FaStarHalfAlt key={index} />
                    return <FaStar key={index} />
                }

                return <FaRegStar key={index} />
            })}
        </HStack>
    )
}

export default StarsRater
