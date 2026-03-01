import apiClient from "../app-client";
import { type FetchResponse } from "@/models/fetch-types";
import { AxiosError, AxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";

type UseDataResult<T> = {
    data: T[]
    totalCount: number
    isLoading: boolean
    error: string
}

export default function useData<T>(endpoint: string, config?: AxiosRequestConfig): UseDataResult<T> {
    const queryKey: any[] = [endpoint]
    config && queryKey.push(config)
    const queryRes = useQuery<FetchResponse<T>, AxiosError>({
        queryKey,
        queryFn: () => apiClient.get<FetchResponse<T>>(endpoint, config).then((res) => res.data),
        staleTime: 3600_000,
        gcTime: 1000_000,
    })

    return {
        data: queryRes.data?.results ?? [],
        totalCount: queryRes.data?.count ?? 0,
        isLoading: queryRes.isLoading,
        error: queryRes.error?.message || "",
    }
}
