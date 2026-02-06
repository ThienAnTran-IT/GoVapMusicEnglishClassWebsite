import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LearningPrograms from './components/LearningPrograms';
import Teachers from './components/Teachers';
import TuitionFees from './components/TuitionFees';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <LearningPrograms />
      <Teachers />
      <TuitionFees />
      <VideoSection />
      <Footer />
    </div>
  );
}

export default App;
