import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import TestPlatform from './pages/Test';
import CraftsDir from './pages/Crafts';
import CraftSingle from './pages/CraftDetail';

function CentersDir() {
  return <div className="text-center py-32 text-2xl font-bold font-heading">قريباً - مراكز التكوين المهني حسب الولاية</div>;
}

function LearnArea() {
  return <div className="text-center py-32 text-2xl font-bold font-heading">قريباً - مساحة التعلم التفاعلي</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[var(--color-bg-sand)]" dir="rtl">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<TestPlatform />} />
            <Route path="/crafts" element={<CraftsDir />} />
            <Route path="/craft/:id" element={<CraftSingle />} />
            <Route path="/centers" element={<CentersDir />} />
            <Route path="/learn" element={<LearnArea />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

