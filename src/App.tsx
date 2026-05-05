import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import TestPlatform from './pages/Test';
import CraftsDir from './pages/Crafts';
import CraftSingle from './pages/CraftDetail';
import LearnHome from './pages/LearnHome';
import CourseOverview from './pages/CourseOverview';
import LessonDetail from './pages/LessonDetail';
import AdminDashboard from './pages/AdminDashboard';
import { ThemeProvider } from './contexts/ThemeContext';

function CentersDir() {
  return <div className="text-center py-32 text-2xl font-bold font-heading">قريباً - مراكز التكوين المهني حسب الولاية</div>;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col font-sans transition-colors duration-400">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<TestPlatform />} />
              <Route path="/crafts" element={<CraftsDir />} />
              <Route path="/craft/:id" element={<CraftSingle />} />
              <Route path="/centers" element={<CentersDir />} />
              <Route path="/learn" element={<LearnHome />} />
              <Route path="/learn/:craftId" element={<CourseOverview />} />
              <Route path="/learn/:craftId/lesson/:lessonId" element={<LessonDetail />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

