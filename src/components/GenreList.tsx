import useGenre from "@/services/hooks/useGenre";
import { Avatar, Button, HStack, List, Spinner, Text } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
    onGenreSelect: (genre: string | null) => void
    genre: string | null
}

const GenreList: FC<Props> = ({ onGenreSelect, genre }) => {
    const { data: genres, isLoading } = useGenre();

    return (
        <>
            {isLoading && <Spinner></Spinner>}
            <List.Root
                listStyle="none"
                flex="1"
                minH="0"
                w="full"
                maxW="100%"
                overflowY="auto"
                overflowX="hidden"
                pe={0}
                css={{
                    scrollbarWidth: "thin",
                    "&::-webkit-scrollbar": {
                        width: "6px",
                        height: "6px",
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "transparent",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "rgba(148, 163, 184, 0.55)",
                        borderRadius: "9999px",
                    },
                }}
            >
                {genres.map((g) => (
                    <List.Item key={g.id}>
                        <HStack ps={2} pe={0} py={2} gap={3} w="full" minW="0">
                            <Avatar.Root shape="rounded" size="md">
                                <Avatar.Fallback name={g.name} />
                                <Avatar.Image src={g.image_background} />
                            </Avatar.Root>
                            <Button
                                variant={"outline"}
                                borderWidth="0"
                                fontSize="1rem"
                                ps={1}
                                pe={0}
                                height="auto"
                                w="full"
                                justifyContent="flex-start"
                                flex="1"
                                minW="0"
                                whiteSpace="normal"
                                onClick={() => onGenreSelect(g.slug)}
                            >
                                <Text
                                    w="full"
                                    whiteSpace="normal"
                                    wordBreak="normal"
                                    overflowWrap="normal"
                                    lineHeight="1.2"
                                    textAlign="left"
                                    fontWeight={g.slug === genre ? "bold" : "normal"}
                                >
                                    {g.name}
                                </Text>
                            </Button>
                        </HStack>
                    </List.Item>
                ))}
            </List.Root>
        </>
    )
};

export default GenreList;
