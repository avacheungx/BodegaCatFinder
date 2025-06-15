import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Navbar from './components/layout/Navbar';
import Map from './components/map/Map';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

// Protected Route component
const ProtectedRoute = ({ children }) => {
  // TODO: Implement actual authentication check
  const isAuthenticated = true; // This should be replaced with actual auth check
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Map />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-cats"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <div>Search Cats Page</div>
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-bodegas"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <div>Search Bodegas Page</div>
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-cats"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <div>Saved Cats Page</div>
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/more-info"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <div>More Info Page</div>
                </>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
