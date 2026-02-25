import sortOptions from '@/config/sort-options'
import type { SortOption } from '@/models/SortOption'

export default function useSortOption(): SortOption[] {
    return sortOptions
}
