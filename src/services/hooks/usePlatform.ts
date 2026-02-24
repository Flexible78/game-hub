import type { Platform } from '@/models/fetch-types'
import useData from '@/services/hooks/useData'

type UsePlatformResult = {
    data: Platform[]
    isLoading: boolean
    error: string
}

export default function usePlatform(): UsePlatformResult {
    return useData<Platform>('platforms/lists/parents')
}
