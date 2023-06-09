import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios'; 

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  // const[error,setError] = useState(null);
  const url = "https://api.restful-api.dev/objects?search  ";


  
  const fetchSearchResults = useCallback(async () => {
    if (searchInput.length === 0) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    // setError(null);

    try {
      const response = await axios.get(
        `${url}=${searchInput}`
      );
      
      setSearchResults(response.data);
      // if(!response.ok){
      //   throw new Error('Something went wrong!');
      // }
    } catch (error) {
      
      console.error('Error fetching search results:', error);
      // setError(error.message);
    }

    setIsLoading(false);
  } );

    useEffect(() => {
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

    <Layout >
      
      <Switch>
        <Route path='/' exact>
          <HomePage 
            value={searchInput}
            onChange={handleSearchInputChange}  
            load={isLoading} 
            result={searchResults.slice(0, 15)}
            search={onSearch} />
          
        </Route>
        <Route path='/auth'>
          <AuthPage   />
        </Route>
        <Route path='/profile'>
          <UserProfile   />
        </Route>
      </Switch> 
    </Layout>
  );
}

export default App;
