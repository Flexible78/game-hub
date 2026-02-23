import { Grid, GridItem } from "@chakra-ui/react"
import Nav from "./components/Nav"
import GameGrid from "./components/GameGrid"


function App() {
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
            <GridItem area="nav" bg="aliceblue" position="sticky" top={0} zIndex={1000} borderBottomWidth="1px">
                <Nav />
            </GridItem>
            <GridItem area="aside" bg="gold" hideBelow="md" p={4}>
                ASIDE
            </GridItem>
            <GridItem area="main" p={4}>
                <GameGrid />
            </GridItem>

        </Grid>
    )
}

export default App
