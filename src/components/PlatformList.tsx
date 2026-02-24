import { Text } from '@chakra-ui/react'
import { type ParentPlatform } from '@/models/fetch-types'

type Props = {
    parentPlatforms: ParentPlatform[]
}

const PlatformList = ({ parentPlatforms }: Props) => {
    const platformNames = Array.from(new Set(parentPlatforms.map(({ platform }) => platform.name))).join(', ')

    return (
        <Text
            fontSize={{ base: '0.95rem', md: '1rem', "2xl": '1.05rem' }}
            color='gray.500'
            textAlign={{ base: 'left', "2xl": 'right' }}
            w='full'
            maxW={{ base: '100%', "2xl": '260px' }}
            lineClamp={{ base: 3, "2xl": 2 }}
        >
            {platformNames || 'Unknown platform'}
        </Text>
    )
}

export default PlatformList
