import { Avatar, Box, Button, HStack, List } from '@chakra-ui/react'
import React from 'react'
import { type Genre } from '@/models/fetch-types'
import apiClient from '@/services/app-client'

type GenreFetchResponse = {
    results: Genre[]
}

const GenreList = () => {
    const [genres, setGenres] = React.useState<Genre[]>([])

    React.useEffect(() => {
        apiClient.get<GenreFetchResponse>('genres').then(res => setGenres(res.data.results))
    }, [])

    return (
        <Box flex='1' minH='0' overflowY='auto' pe='1'>
            <List.Root gap='2'>
                {genres.map(genre => (
                    <List.Item key={genre.id} listStyleType='none'>
                        <HStack w='full' gap='3'>
                            <Avatar.Root size='sm'>
                                <Avatar.Fallback name={genre.name} />
                                <Avatar.Image src={genre.image_background ?? undefined} />
                            </Avatar.Root>
                            <Button variant='ghost' justifyContent='flex-start' fontWeight='medium' w='full'>
                                {genre.name}
                            </Button>
                        </HStack>
                    </List.Item>
                ))}
            </List.Root>
        </Box>
    )
}

export default GenreList
