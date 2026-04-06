import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import About from './pages/About';

import Dashboard from './pages/Dashboard';
import Subjects from './pages/Subjects';
import SubjectDetail from './pages/SubjectDetail';
import Settings from './pages/Settings';
import { MaterialProvider } from './context/MaterialContext';
import { UserProvider } from './context/UserContext';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <UserProvider>
            <MaterialProvider>
                <Router>
                    <Routes>
                        {/* Public Route - Landing Page */}
                        <Route path="/" element={<Landing />} />
                        <Route path="/about" element={<About />} />

                        {/* Auth Routes */}
                        <Route path="/auth/login" element={<Login />} />
                        <Route path="/auth/signup" element={<Signup />} />

                        {/* Protected Routes (Main App) */}
                        <Route path="/app" element={<MainLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="subjects" element={<Subjects />} />
                            <Route path="subjects/:id" element={<SubjectDetail />} />
                            <Route path="settings" element={<Settings />} />
                        </Route>
                    </Routes>
                    <Toaster 
                        position="bottom-center"
                        toastOptions={{
                            style: {
                                background: '#1e293b',
                                color: '#f8fafc',
                                border: '1px solid rgba(255,255,255,0.1)',
                            },
                        }}
                    />
                </Router>
            </MaterialProvider>
        </UserProvider>
    );
}

export default App;
