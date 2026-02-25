import { Box, InputGroup, Input } from '@chakra-ui/react'
import { FC, useRef, useState } from 'react'
import { LuSearch } from 'react-icons/lu'
type Props = {
    onSubmitSearchText: (text: string) => void
}
const SearchBar:FC<Props> = ({onSubmitSearchText}) => {
    const [value, setValue] = useState<string>("")
    return (
        <Box as="form" onSubmit={event => {
            event.preventDefault();
            onSubmitSearchText(value)
        }}>
            <InputGroup startElement={<LuSearch/>}>
                <Input  placeholder='Search games...' borderRadius={"30px"}
                        onChange={(event) => setValue(event.target.value)}/>
            </InputGroup>

        </Box>
    )
}

export default SearchBar
