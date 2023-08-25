import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import { CssBaseline } from '@mui/material';

import ScrollToTop from './components/scroll-to-top';

// Context Providers
import ThemeProvider from './theme';
import { AuthContextProvider } from './context/authentication/authContextProvider'
import { KycContextProvider } from './context/kyc/kycContextProvider';
import { KycBankContextProvider } from './context/bank/kycBankContextProvider';
import { KycAddressContextProvider } from './context/address/kycAddressContextProvider';
import { KycNomineeContextProvider } from './context/nominee/kycNomineeContextProvider';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider>
            <AuthContextProvider>
              <KycContextProvider>
                <KycBankContextProvider>
                  <KycAddressContextProvider>
                    <KycNomineeContextProvider>
                      <ScrollToTop />
                      <Router />
                    </KycNomineeContextProvider>
                  </KycAddressContextProvider>
                </KycBankContextProvider>
              </KycContextProvider>
            </AuthContextProvider>
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
