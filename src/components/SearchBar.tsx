import { FC, memo, useRef } from 'react'
import { Box, Input, InputGroup } from '@chakra-ui/react'
import { LuSearch } from 'react-icons/lu'
import useGameQuery from '@/services/hooks/useGameQuery'

const SearchBar: FC = () => {
    const inputElement = useRef<HTMLInputElement>(null)
    const setSearchStr = useGameQuery((state) => state.setSearchStr)

    return (
        <Box
            as='form'
            onSubmit={(event) => {
                event.preventDefault()
                const searchText = inputElement.current?.value ?? ''
                setSearchStr(searchText)
            }}
        >
            <InputGroup startElement={<LuSearch />}>
                <Input ref={inputElement} placeholder='Search games...' borderRadius='3px' />
            </InputGroup>
        </Box>
    )
}

export default memo(SearchBar)
