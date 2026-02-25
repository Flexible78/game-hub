import type { SortOption } from '@/models/SortOption'

const sortOptions: SortOption[] = [
    { id: -1, value: null, name: 'No Ordering' },
    { id: 1, value: '-released', name: 'by Release Date' },
    { id: 2, value: '-added', name: 'by Added Date' },
    { id: 3, value: '-updated', name: 'by Updated Date' },
    { id: 4, value: '-created', name: 'by Created Date' },
    { id: 5, value: '-rating', name: 'by Rating' },
    { id: 6, value: '-metacritic', name: 'by Critic Score' },
    { id: 7, value: 'name', name: 'by Name' },
]

export default sortOptions
