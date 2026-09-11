import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Banner />
      </main>
    </div>
  );
}

export default App;
