import { Box, Grid, GridItem, Heading, HStack } from "@chakra-ui/react"
import Nav from "./components/Nav"
import GameGrid from "./components/GameGrid"
import { useColorModeValue } from "./components/ui/color-mode"
import GenreList from "./components/GenreList"
import { useState } from "react"
import type { GameQueryParams } from "./models/GameQueryParams"
import PlatformSelector from "./components/PlatformSelector"
import GenreSelector from "./components/GenreSelector"
import SortSelector from "./components/SortSelector"


function App() {
    const [gameQuery, setGameQuery] = useState<GameQueryParams>({
        genreSlug: null,
        parentPlatformSlug: null,
        searchStr: null,
        orderings: null,
    })
    const navHeight = "68px"
    const navBackground = useColorModeValue(
        "linear-gradient(90deg, #eef3fb 0%, #e8effa 60%, #ecebff 100%)",
        "linear-gradient(90deg, #1a2330 0%, #1a2230 60%, #211b31 100%)",
    )
    const navBorder = useColorModeValue("#d4dfef", "#334357")
    const asideBackground = useColorModeValue(
        "linear-gradient(180deg, #f7f9fe 0%, #edf2fb 100%)",
        "linear-gradient(180deg, #111a27 0%, #0d1522 100%)",
    )
    const asideBorder = useColorModeValue("#d8e2f2", "#2a3a4f")
    const asidePanelBg = useColorModeValue("rgba(255, 255, 255, 0.55)", "rgba(24, 33, 49, 0.35)")
    const asideTitleColor = useColorModeValue("#2f3f58", "#d1dcf2")

    return (
        <Grid
            templateAreas={{
                base: '"nav" "main"',
                md: '"nav nav" "aside main"'
            }}
            templateColumns={{ base: "1fr", md: "280px 1fr" }}
            templateRows="auto 1fr"
            minH="100vh"
        >
            <GridItem
                area="nav"
                bg={navBackground}
                position="sticky"
                top={0}
                zIndex={1000}
                borderBottomWidth="1px"
                borderBottomColor={navBorder}
                backdropFilter="blur(4px)"
                minH={navHeight}
            >
                <Nav />
            </GridItem>
            <GridItem
                area="aside"
                bg={asideBackground}
                hideBelow="md"
                position="sticky"
                top={navHeight}
                alignSelf="start"
                h={`calc(100vh - ${navHeight})`}
                p={5}
                borderRightWidth="1px"
                borderRightColor={asideBorder}
            >
                <Box
                    h="full"
                    minH="0"
                    display="flex"
                    flexDirection="column"
                    rounded="xl"
                    borderWidth="1px"
                    borderColor={asideBorder}
                    bg={asidePanelBg}
                    ps={4}
                    pe={1}
                    py={4}
                >
                    <Heading
                        as="button"
                        size="md"
                        color={asideTitleColor}
                        mb={4}
                        textAlign="left"
                        cursor="pointer"
                        onClick={() => setGameQuery(prev => ({ ...prev, genreSlug: null }))}
                    >
                        All genres
                    </Heading>
                    <GenreList
                        genre={gameQuery.genreSlug}
                        onGenreSelect={(genre: string | null) => setGameQuery(prev => ({ ...prev, genreSlug: genre }))}
                    />
                </Box>
            </GridItem>
            <GridItem area="main" p={4}>
                <HStack gap={3} wrap="wrap" mb={1}>
                    <GenreSelector
                        genreSlug={gameQuery.genreSlug}
                        onGenreSelect={(genre: string | null) => setGameQuery(prev => ({ ...prev, genreSlug: genre }))}
                    />
                    <PlatformSelector
                        parentPlatformSlug={gameQuery.parentPlatformSlug}
                        onPlatformSelect={(platform: string | null) => setGameQuery(prev => ({ ...prev, parentPlatformSlug: platform }))}
                    />
                    <SortSelector
                        ordering={gameQuery.orderings}
                        onOrderingSelect={(ordering: string | null) => setGameQuery(prev => ({ ...prev, orderings: ordering }))}
                    />
                </HStack>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>

        </Grid>
    )
}

export default App
