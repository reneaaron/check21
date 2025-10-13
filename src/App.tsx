import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import Home from './pages/Home';
import LendingComparison from './pages/LendingComparison';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lending" element={<LendingComparison />} />
        </Routes>
        
        {/* Footer */}
        <footer className="border-t py-12">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="text-2xl font-bold mb-4">
                <span className="text-primary">check</span>
                <span className="text-foreground">21</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Professional Bitcoin services comparison platform
              </p>
              <p className="text-xs text-muted-foreground">
                Compare rates, features, and services across leading Bitcoin platforms.
                <br />
                Bitcoin-backed lending is just the beginning - more services coming soon!
              </p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
