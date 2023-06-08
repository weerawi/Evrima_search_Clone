import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
import axios from 'axios'; 

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const url = "https://api.restful-api.dev/objects?search";


  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchInput.length === 0) {
        setSearchResults([]);
        return;
      }

      setIsLoading(true);

      try {
        const response = await axios.get(
          `${url}=${searchInput}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }

      setIsLoading(false);
    };

    fetchSearchResults();
  }, [searchInput]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setSearchInput(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };
   

  return (

    <Layout>
      
      <Switch>
        <Route path='/' exact>
          <HomePage 
            value={searchInput}
            onChange={handleSearchInputChange}  
            load={isLoading} 
            result={searchResults.slice(0, 10)}
            search={onSearch} />
        </Route>
        <Route path='/auth'>
          <AuthPage   />
        </Route>
        <Route path='/profile'>
          <UserProfile   />
        </Route>
      </Switch>
      

      {/* <div> 
          {isLoading ? (
            <p>Loading search results...</p>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {searchResults.map((product) => (
                <Card key={ product.id} name={product.name} />
              ))}
            </div>
          )}
      </div> */}


    </Layout>
  );
}

export default App;
