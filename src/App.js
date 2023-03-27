import MovieList from "./components/Movie-List";
import SiteHeader from "./components/Site-Header";

function App() {
  return (
    <div className="dark:bg-gray-800">
      <SiteHeader />
      <MovieList />
    </div>
  );
}

export default App;
