import { useEffect, useState } from 'react'
import apiClient from '@/services/app-client'

type ApiResponse<T> = {
    results: T[]
}

type UseDataResult<T> = {
    data: T[]
    isLoading: boolean
    error: string | null
}

export default function useData<T>(endpoint: string): UseDataResult<T> {
    const [data, setData] = useState<T[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let isCancelled = false
        setIsLoading(true)
        setError(null)

        apiClient
            .get<ApiResponse<T>>(endpoint)
            .then(res => {
                if (isCancelled) return
                setData(res.data.results)
            })
            .catch(err => {
                if (isCancelled) return
                setError(err instanceof Error ? err.message : 'Failed to load data')
            })
            .finally(() => {
                if (isCancelled) return
                setIsLoading(false)
            })

        return () => {
            isCancelled = true
        }
    }, [endpoint])

    return { data, isLoading, error }
}
