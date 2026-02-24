import { useEffect, useState } from 'react'
import apiClient from '@/services/app-client'
import { AxiosError } from 'axios'

type ApiResponse<T> = {
    results: T[]
}

type UseDataResult<T> = {
    data: T[]
    isLoading: boolean
    error: string | null
}

export default function useData<T>(endpoint: string, genre: string | null = null): UseDataResult<T> {
    const [data, setData] = useState<T[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let isCancelled = false
        setIsLoading(true)
        setError(null)

        apiClient
            .get<ApiResponse<T>>(endpoint, { params: genre ? { genres: genre } : undefined })
            .then(res => {
                if (isCancelled) return
                setData(res.data.results)
            })
            .catch(err => {
                if (isCancelled) return
                setData([])
                setError(
                    err instanceof AxiosError
                        ? err.message
                        : 'Failed to load data',
                )
            })
            .finally(() => {
                if (isCancelled) return
                setIsLoading(false)
            })

        return () => {
            isCancelled = true
        }
    }, [endpoint, genre])

    return { data, isLoading, error }
}
