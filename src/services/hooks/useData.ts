import { useEffect, useState } from 'react'
import apiClient from '@/services/app-client'

type ApiResponse<T> = {
    results: T[]
}

type UseDataResult<T> = {
    data: T[]
    isLoading: boolean
}

export default function useData<T>(endpoint: string): UseDataResult<T> {
    const [data, setData] = useState<T[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let isCancelled = false
        setIsLoading(true)

        apiClient
            .get<ApiResponse<T>>(endpoint)
            .then(res => {
                if (isCancelled) return
                setData(res.data.results)
            })
            .finally(() => {
                if (isCancelled) return
                setIsLoading(false)
            })

        return () => {
            isCancelled = true
        }
    }, [endpoint])

    return { data, isLoading }
}
