import useGenre from "@/services/hooks/useGenre";
import { Avatar, Button, HStack, List, Spinner, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { useColorModeValue } from "./ui/color-mode";
import useGameQuery from "@/services/hooks/useGameQuery";

type Props = {
    onGenreSelect?: (genre: string | null) => void
    genre?: string | null
}

const GenreList: FC<Props> = ({ onGenreSelect, genre }) => {
    const { data: genres, isLoading } = useGenre();
    const selectedGenre = useGameQuery((state) => state.genreSlug)
    const setGenreSlug = useGameQuery((state) => state.setGenreSlug)
    const handleGenreSelect = onGenreSelect ?? setGenreSlug
    const activeGenre = genre ?? selectedGenre
    const filterTextColor = useColorModeValue("#2a3f60", "#b2bfd3")
    const scrollbarThumb = useColorModeValue("rgba(91, 113, 146, 0.55)", "rgba(73, 93, 121, 0.78)")
    const scrollbarTrack = useColorModeValue("rgba(219, 228, 241, 0.42)", "rgba(18, 29, 44, 0.76)")

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
                    scrollbarColor: `${scrollbarThumb} ${scrollbarTrack}`,
                    "&::-webkit-scrollbar": {
                        width: "5px",
                        height: "5px",
                    },
                    "&::-webkit-scrollbar-track": {
                        background: scrollbarTrack,
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: scrollbarThumb,
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
                                onClick={() => handleGenreSelect(g.slug)}
                            >
                                <Text
                                    w="full"
                                    whiteSpace="normal"
                                    wordBreak="normal"
                                    overflowWrap="normal"
                                    lineHeight="1.2"
                                    textAlign="left"
                                    color={filterTextColor}
                                    fontWeight={g.slug === activeGenre ? "bold" : "normal"}
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

export default memo(GenreList);
