import apiClient from "../app-client";
import { type FetchResponse } from "@/models/fetch-types";
import { AxiosError, AxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useData<T>(endpoint: string, config?: AxiosRequestConfig): {data: T[], isLoading: boolean, error: string} {
    const queryKey: any[] = [endpoint]
    config && queryKey.push(config)
    const queryRes = useQuery<T[], AxiosError>({
        queryKey,
        queryFn: () => apiClient.get<FetchResponse<T>>(endpoint, config).then(res => res.data.results)
    })

    return {data:queryRes.data || [], isLoading: queryRes.isLoading, error: queryRes.error?.message || ""};
}
