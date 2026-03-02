import { Box, ButtonGroup, HStack, IconButton, Pagination } from "@chakra-ui/react"
import { memo, type FC } from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

type Props = {
    page: number
    totalCount: number
    pageSize?: number
    onPageChange: (page: number) => void
}

const GamePagination: FC<Props> = ({ page, totalCount, pageSize = 20, onPageChange }) => {
    return (
        <HStack justify="center" mb={4} w="full">
            <Pagination.Root
                count={Math.max(totalCount, 1)}
                pageSize={pageSize}
                page={page}
                onPageChange={(details) => onPageChange(details.page)}
                siblingCount={1}
                boundaryCount={1}
            >
                <ButtonGroup variant="outline" size={{ base: "xs", md: "sm" }} flexWrap="wrap">
                    <Pagination.PrevTrigger asChild>
                        <IconButton aria-label="Previous page">
                            <LuChevronLeft />
                        </IconButton>
                    </Pagination.PrevTrigger>

                    <Box display={{ base: "none", md: "block" }}>
                        <Pagination.Items
                            render={(pageItem) => (
                                <IconButton key={pageItem.value} variant={{ base: "outline", _selected: "solid" }}>
                                    {pageItem.value}
                                </IconButton>
                            )}
                        />
                    </Box>

                    <Pagination.PageText
                        display={{ base: "block", md: "none" }}
                        format="short"
                        fontSize="sm"
                        px={2}
                        color="gray.500"
                    />

                    <Pagination.NextTrigger asChild>
                        <IconButton aria-label="Next page">
                            <LuChevronRight />
                        </IconButton>
                    </Pagination.NextTrigger>
                </ButtonGroup>
            </Pagination.Root>
        </HStack>
    )
}

export default memo(GamePagination)
