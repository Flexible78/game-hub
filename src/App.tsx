import { Box, Grid, GridItem, Heading, HStack } from "@chakra-ui/react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import GenreSelector from "./components/GenreSelector"
import Nav from "./components/Nav"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"
import useGameQuery from "@/services/hooks/useGameQuery"

function App() {
    const navHeight = "52px"
    const navBackground = "linear-gradient(90deg, #eef3fb 0%, #e8effa 60%, #ecebff 100%)"
    const navTexture = "repeating-linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) 5px)"
    const navVelvetShade = "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 58%, rgba(0, 0, 0, 0.08) 100%)"
    const navBorder = "#d4dfef"

    const asideBackground = "linear-gradient(180deg, #f7f9fe 0%, #edf2fb 100%)"
    const asideBorder = "#d8e2f2"
    const asidePanelBg = "rgba(255, 255, 255, 0.55)"
    const asidePanelBorder = "rgba(216, 226, 242, 0.7)"
    const asideTitleColor = "#4a6487"
    const asideTitleHoverColor = "#2d4e78"
    const asideTitleBg = "rgba(223, 232, 246, 0.95)"
    const asideTitleHoverBg = "rgba(212, 224, 243, 1)"
    const asideTitleBorder = "rgba(181, 198, 222, 0.85)"

    return (
        <Grid
            templateAreas={{
                base: '"nav" "main"',
                md: '"nav nav" "aside main"',
            }}
            templateColumns={{ base: "1fr", md: "280px 1fr" }}
            templateRows="auto 1fr"
            minH="100vh"
        >
            <GridItem
                area="nav"
                bgImage={`${navTexture}, ${navVelvetShade}, ${navBackground}`}
                position="sticky"
                top={0}
                zIndex={1000}
                borderBottomWidth="1px"
                borderBottomColor={navBorder}
                backdropFilter="blur(4px)"
                h={navHeight}
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
                ps={3}
                pe={0}
                py={4}
                borderRightWidth="1px"
                borderRightColor={asideBorder}
            >
                <Box
                    h="full"
                    minH="0"
                    display="flex"
                    flexDirection="column"
                    rounded="xl"
                    borderWidth="0.5px"
                    borderColor={asidePanelBorder}
                    bg={asidePanelBg}
                    ps={2}
                    pe={0}
                    py={4}
                >
                    <Heading
                        as="button"
                        size="lg"
                        color={asideTitleColor}
                        mt={0}
                        mb={2.5}
                        w="full"
                        ps={3}
                        pe={0}
                        py={2}
                        rounded="md"
                        bg={asideTitleBg}
                        borderWidth="0.5px"
                        borderColor={asideTitleBorder}
                        textAlign="left"
                        cursor="pointer"
                        transition="color 0.2s ease"
                        _hover={{ color: asideTitleHoverColor, bg: asideTitleHoverBg }}
                        onClick={() => useGameQuery.getState().setGenreSlug(null)}
                    >
                        All genres
                    </Heading>
                    <GenreList />
                </Box>
            </GridItem>

            <GridItem area="main" py={4} ps={{ base: 4, md: 0 }} pe={{ base: 4, md: 4 }}>
                <HStack gap={3} wrap="wrap" mb={1} align="stretch">
                    <Box display={{ base: "block", md: "none" }}>
                        <GenreSelector />
                    </Box>
                    <PlatformSelector />
                    <SortSelector />
                </HStack>
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default App
