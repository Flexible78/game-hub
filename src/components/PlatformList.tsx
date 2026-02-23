import { Text } from '@chakra-ui/react'
import { type ParentPlatform } from '@/models/fetch-types'

type Props = {
    parentPlatforms: ParentPlatform[]
}

const PlatformList = ({ parentPlatforms }: Props) => {
    const platformNames = Array.from(new Set(parentPlatforms.map(({ platform }) => platform.name))).join(', ')

    return (
        <Text fontSize='xs' color='gray.500' textAlign='right' maxW='250px' lineClamp={2}>
            {platformNames || 'Unknown platform'}
        </Text>
    )
}

export default PlatformList
