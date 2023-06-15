import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Header from './components/Header/Header';


const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
function Root() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order" element={<OrderReview />} />
        <Route path="/inventory" element={<ManageInventory />} />
      </Routes>
    </div>
  );
}
