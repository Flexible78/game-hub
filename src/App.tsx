import { Box, Grid, GridItem } from "@chakra-ui/react"
import Nav from "./components/Nav"
import GameGrid from "./components/GameGrid"
import { useColorModeValue } from "./components/ui/color-mode"


function App() {
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
    const asideDecorBg = useColorModeValue("rgba(255, 255, 255, 0.45)", "rgba(24, 33, 49, 0.35)")
    const asideGlow = useColorModeValue("rgba(86, 129, 255, 0.22)", "rgba(118, 162, 255, 0.28)")

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
            >
                <Nav />
            </GridItem>
            <GridItem
                area="aside"
                bg={asideBackground}
                hideBelow="md"
                p={5}
                borderRightWidth="1px"
                borderRightColor={asideBorder}
            >
                <Box h="full" rounded="xl" borderWidth="1px" borderColor={asideBorder} bg={asideDecorBg} position="relative" overflow="hidden">
                    <Box
                        position="absolute"
                        top="6"
                        left="6"
                        h="3"
                        w="14"
                        rounded="full"
                        bgGradient="linear(to-r, #eb3ca6, #7a4df3, #44a8ff)"
                    />
                    <Box
                        position="absolute"
                        top="14"
                        left="6"
                        h="2"
                        w="10"
                        rounded="full"
                        bgGradient="linear(to-r, #44a8ff, #7a4df3)"
                    />
                    <Box
                        position="absolute"
                        bottom="-20"
                        right="-24"
                        h="56"
                        w="56"
                        rounded="full"
                        bg={asideGlow}
                        filter="blur(30px)"
                    />
                </Box>
            </GridItem>
            <GridItem area="main" p={4}>
                <GameGrid />
            </GridItem>

        </Grid>
    )
}

export default App
