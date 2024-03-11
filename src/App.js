
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YouTubeApiProvider } from './context/YouTubeApiContext';

const queryClient=new QueryClient();

function App() {
  return(
  <>
  <Navbar/>
  
  <YouTubeApiProvider>
    <QueryClientProvider client={queryClient}>
      <Outlet/>
    </QueryClientProvider>
  </YouTubeApiProvider>
  </>
  )
}

export default App;
