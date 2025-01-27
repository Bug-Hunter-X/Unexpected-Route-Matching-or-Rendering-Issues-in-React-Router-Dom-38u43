```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log('Current Location:', location);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add routes for dynamic segments and nested routes here, carefully considering the path matching logic. Consider using path parameters or regular expressions for better control over route matching */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```