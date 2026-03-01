import { Button, HStack, Text } from "@chakra-ui/react"
import { memo, type FC } from "react"

type Props = {
    page: number
    totalCount: number
    pageSize?: number
    onPageChange: (page: number) => void
}

const GamePagination: FC<Props> = ({ page, totalCount, pageSize = 20, onPageChange }) => {
    const totalPages = Math.max(1, Math.ceil(totalCount / pageSize))

    return (
        <HStack justify="center" gap={3} mb={4} wrap="wrap">
            <Button
                size="sm"
                variant="outline"
                onClick={() => onPageChange(page - 1)}
                disabled={page <= 1}
            >
                Previous
            </Button>
            <Text fontSize="sm" color="gray.500">
                Page {page} of {totalPages}
            </Text>
            <Button
                size="sm"
                variant="outline"
                onClick={() => onPageChange(page + 1)}
                disabled={page >= totalPages}
            >
                Next
            </Button>
        </HStack>
    )
}

export default memo(GamePagination)
