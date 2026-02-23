import { Avatar, Box, Button, HStack, List } from '@chakra-ui/react'
import React from 'react'
import { type Genre } from '@/models/fetch-types'
import apiClient from '@/services/app-client'

type GenreFetchResponse = {
    results: Genre[]
}

const formatGenreName = (name: string) => {
    const words = name.trim().split(/\s+/)
    if (words.length < 2) return name
    return `${words[0]}\n${words.slice(1).join(' ')}`
}

const GenreList = () => {
    const [genres, setGenres] = React.useState<Genre[]>([])

    React.useEffect(() => {
        apiClient.get<GenreFetchResponse>('genres').then(res => setGenres(res.data.results))
    }, [])

    return (
        <Box flex='1' minH='0' overflowY='auto' overflowX='hidden' pe='0.5'>
            <List.Root gap='2'>
                {genres.map(genre => (
                    <List.Item key={genre.id} listStyleType='none'>
                        <HStack w='full' minW='0' gap='2'>
                            <Avatar.Root size='xs'>
                                <Avatar.Fallback name={genre.name} />
                                <Avatar.Image src={genre.image_background ?? undefined} />
                            </Avatar.Root>
                            <Button
                                variant='ghost'
                                justifyContent='flex-start'
                                fontWeight='medium'
                                fontSize='sm'
                                px='2'
                                py='1.5'
                                h='auto'
                                flex='1'
                                minW='0'
                                whiteSpace='pre-line'
                                lineHeight='1.2'
                                textAlign='left'
                            >
                                {formatGenreName(genre.name)}
                            </Button>
                        </HStack>
                    </List.Item>
                ))}
            </List.Root>
        </Box>
    )
}

export default GenreList
