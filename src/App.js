import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
import ScrollToTop from './components/scroll-to-top';
import { AuthContextProvider } from './context/authentication/authContextProvider'

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider>
            <AuthContextProvider>
                <ScrollToTop />
                <Router />
            </AuthContextProvider>
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;