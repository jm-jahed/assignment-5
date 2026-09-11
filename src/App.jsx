import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechnologyGrid from './components/TechnologyGrid';
import YourStack from './components/YourStack';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}technologies.json`)
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

  // Add to Stack with duplicate check 
  const handleAddToStack = (tech) => {
    const isAlreadyInStack = stack.some((item) => item.id === tech.id);
    if (isAlreadyInStack) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: 'top-right',
        autoClose: 2500,
      });
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      position: 'top-right',
      autoClose: 2500,
    });
  };

  // Remove individual item 
  const handleRemoveFromStack = (techId) => {
    const itemToRemove = stack.find((item) => item.id === techId);
    setStack((prev) => prev.filter((item) => item.id !== techId));
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from your stack.`, {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  // Remove all items
  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('All technologies removed from your stack!', {
      position: 'top-right',
      autoClose: 2500,
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
      {/* Toast Notification Container */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Navbar />
      <main className="flex-1">
        <Banner />

        {/* Technology  */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8 text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Explore the <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-3">
              <span className="loading loading-spinner loading-lg text-purple-600"></span>
              <p className="text-sm text-gray-500">Loading technologies...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Technology Cards Grid */}
              <div className="lg:col-span-8 xl:col-span-9">
                <TechnologyGrid
                  technologies={technologies}
                  isAddedChecker={(id) => stack.some((item) => item.id === id)}
                  onToggleStack={handleAddToStack}
                />
              </div>

              {/* Your Stack Sidebar */}
              <div className="lg:col-span-4 xl:col-span-3">
                <YourStack
                  stack={stack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
