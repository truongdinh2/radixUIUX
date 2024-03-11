import './App.css';
import './lib/i18n';

import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ToastProvider } from './components/ui/toast.tsx';
import { AuthProvider } from './hooks/useAuth';
import { ThemeProvider } from './hooks/useTheme.tsx';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes />
            </Suspense>
          </ThemeProvider>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
