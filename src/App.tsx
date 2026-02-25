import SearchBar from "./components/SearchBar"

function App() {
    return <SearchBar onSubmitSearchText={(text: string) => alert(text)} />
}

export default App
