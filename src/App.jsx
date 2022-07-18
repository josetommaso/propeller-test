import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import NewsList from "./components/NewsList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.scss";
import { NewsProvider } from "./context/newsProvider";

function App() {
  return (
    <div className="bg-tertiary h-100">
      <Header title="Propeller Latest News" />
      <NewsProvider>
        <div className="container px-lg-5">
          <SearchForm />
          <NewsList />
        </div>
      </NewsProvider>
    </div>
  );
}

export default App;
