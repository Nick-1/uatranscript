import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KtPage from './pages/KtPage.tsx';
import PrintPage from './pages/PrintPage';
import MainPage from './pages/MainPage';
import XrayPage from './pages/XrayPage';
import MrtPage from './pages/MrtPage';
import UzdPage from './pages/UzdPage.tsx';
import './index.css';
import Layout from './components/layout/Layout';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="rentgen" element={<XrayPage />} />
                    <Route path="kt" element={<KtPage />} />
                    <Route path="mrt" element={<MrtPage />} />
                    <Route path="uzd" element={<UzdPage />} />
                    <Route path="print" element={<PrintPage />} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
