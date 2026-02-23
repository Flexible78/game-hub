import { Box, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react"
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
    const asideTitleColor = useColorModeValue("#2f3f58", "#d1dcf2")
    const asideTextColor = useColorModeValue("#546783", "#91a6c7")

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
                <VStack align="start" gap={4}>
                    <Box
                        h="3"
                        w="14"
                        rounded="full"
                        bgGradient="linear(to-r, #eb3ca6, #7a4df3, #44a8ff)"
                    />
                    <Heading size="md" color={asideTitleColor}>
                        Aside
                    </Heading>
                    <Text fontSize="sm" color={asideTextColor} lineHeight="1.6">
                        Выбрана спокойная палитра под логотип: холодная база и мягкий
                        неоновый акцент.
                    </Text>
                </VStack>
            </GridItem>
            <GridItem area="main" p={4}>
                <GameGrid />
            </GridItem>

        </Grid>
    )
}

export default App
