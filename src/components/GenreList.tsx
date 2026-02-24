import useGenre from "@/services/hooks/useGenre";
import { Avatar, Button, HStack, List, Spinner, Text } from "@chakra-ui/react";
import { FC, useMemo } from "react";

type Props = {
    onGenreSelect: (genre: string | null) => void
    genre: string | null
}

const GenreList: FC<Props> = ({ onGenreSelect, genre }) => {
    const { data: genres, isLoading } = useGenre();

    const genresWithAll = useMemo(() => (
        [
            {
                id: -1,
                name: "All genres",
                slug: "",
                games_count: 0,
                image_background: ""
            },
            ...genres
        ]
    ), [genres]);

    return (
        <>
            {isLoading && <Spinner></Spinner>}
            <List.Root listStyle="none" maxHeight="85vh" overflow="auto" width="15vw">
                {genresWithAll.map((g) => (
                    <List.Item key={g.id}>
                        <HStack padding={2}>
                            <Avatar.Root shape="rounded" size="lg">
                                <Avatar.Fallback name={g.name} />
                                <Avatar.Image src={g.image_background} />
                            </Avatar.Root>
                            <Button
                                variant={"outline"}
                                borderWidth="0"
                                fontSize={"1.1rem"}
                                paddingX="1"
                                height="auto"
                                whiteSpace="normal"
                                textAlign="left"
                                onClick={() => onGenreSelect(g.id === -1 ? null : g.slug)}
                            >
                                <Text
                                    maxW="10vw"
                                    lineHeight="1.2"
                                    fontWeight={(g.id === -1 ? genre === null : g.slug === genre) ? "bold" : "normal"}
                                >
                                    {g.name}
                                </Text>
                            </Button>
                        </HStack>
                    </List.Item>
                ))}
            </List.Root>
            ;
        </>
    )
};

export default GenreList;
