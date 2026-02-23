import { HStack, Icon } from '@chakra-ui/react'
import { type ParentPlatform } from '@/models/fetch-types'
import { FaAndroid, FaApple, FaGlobe, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'
import type { IconType } from 'react-icons'

type Props = {
    parentPlatforms: ParentPlatform[]
}

const iconMap: Record<string, IconType> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    web: FaGlobe,
}

const PlatformIconList = ({ parentPlatforms }: Props) => {
    return (
        <HStack gap='2' color='gray.500'>
            {parentPlatforms.map(({ platform }) => {
                const PlatformIcon = iconMap[platform.slug]
                if (!PlatformIcon) return null

                return <Icon key={platform.id} as={PlatformIcon} aria-label={platform.name} boxSize='4' />
            })}
        </HStack>
    )
}

export default PlatformIconList
