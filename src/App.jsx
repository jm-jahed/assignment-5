import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechnologyCard from './components/TechnologyCard';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch technologies');
        }
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching technologies:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Banner />

        {/* Technology Section */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8 text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Explore the <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Loading State or Cards Preview */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-3">
              <span className="loading loading-spinner loading-lg text-purple-600"></span>
              <p className="text-sm text-gray-500">Loading technologies...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.slice(0, 3).map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  isAdded={false}
                  onToggleStack={(item) => console.log('Clicked:', item.name)}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
