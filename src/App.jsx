import Navber from "./Shared/Navber/Navber";
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default App;