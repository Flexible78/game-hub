import { Box, Grid, GridItem, Heading, HStack } from "@chakra-ui/react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import GenreSelector from "./components/GenreSelector"
import Nav from "./components/Nav"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"
import useGameQuery from "@/services/hooks/useGameQuery"
import { useColorModeValue } from "./components/ui/color-mode"

function App() {
    const navHeight = "52px"
    const navBackground = useColorModeValue(
        "linear-gradient(90deg, #eef3fb 0%, #e8effa 60%, #ecebff 100%)",
        "linear-gradient(90deg, #1a2330 0%, #1a2230 60%, #211b31 100%)",
    )
    const navTexture = useColorModeValue(
        "repeating-linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) 5px)",
        "repeating-linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0px, rgba(255, 255, 255, 0.08) 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) 5px)",
    )
    const navVelvetShade = useColorModeValue(
        "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 58%, rgba(0, 0, 0, 0.08) 100%)",
        "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.25) 100%)",
    )
    const navBorder = useColorModeValue("#d4dfef", "#334357")

    const asideBackground = useColorModeValue(
        "linear-gradient(180deg, #f7f9fe 0%, #edf2fb 100%)",
        "linear-gradient(180deg, #111a27 0%, #0d1522 100%)",
    )
    const asideBorder = useColorModeValue("#d8e2f2", "#2a3a4f")
    const asidePanelBg = useColorModeValue("rgba(255, 255, 255, 0.55)", "rgba(24, 33, 49, 0.35)")
    const asidePanelBorder = useColorModeValue("rgba(216, 226, 242, 0.7)", "rgba(42, 58, 79, 0.7)")
    const asideTitleColor = useColorModeValue("#4a6487", "#dbe8ff")
    const asideTitleHoverColor = useColorModeValue("#2d4e78", "#ffffff")
    const asideTitleBg = useColorModeValue("rgba(223, 232, 246, 0.95)", "rgba(9, 17, 30, 0.72)")
    const asideTitleHoverBg = useColorModeValue("rgba(212, 224, 243, 1)", "rgba(13, 24, 42, 0.95)")
    const asideTitleBorder = useColorModeValue("rgba(181, 198, 222, 0.85)", "rgba(50, 68, 92, 0.9)")

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
