import { useEffect, useState } from 'react'
import type { FetchResponse } from '@/models/fetch-types'
import apiClient from '@/services/app-client'
import { AxiosError, type AxiosRequestConfig } from 'axios'

type UseDataResult<T> = {
    data: T[]
    isLoading: boolean
    error: string
}

export default function useData<T>(
    endpoint: string,
    config?: AxiosRequestConfig,
    deps: readonly unknown[] = [],
): UseDataResult<T> {
    const [data, setData] = useState<T[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        let isCancelled = false
        setIsLoading(true)
        setError('')

        apiClient
            .get<FetchResponse<T>>(endpoint, config)
            .then(res => {
                if (isCancelled) return
                setData(res.data.results)
            })
            .catch((e: unknown) => {
                if (isCancelled) return
                setData([])
                setError(e instanceof AxiosError ? e.message : 'Failed to load data')
            })
            .finally(() => {
                if (isCancelled) return
                setIsLoading(false)
            })

        return () => {
            isCancelled = true
        }
    }, [endpoint, ...deps])

    return { data, isLoading, error }
}
