import { createBrowserRouter} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/index';
import Dashboard from './pages/Dashboard/index'
import Wallet   from "./pages/Wallet/index";
import Exchange from "./pages/Exchange/index";
import HelpCenter from "./pages/HelpCenter/index";
import Analytics from "./pages/Analytics/index";
import Messages from "./pages/Messages/index";
import Transactions from "./pages/Transactions/index";
import Settings from "./pages/Settings/index"
const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />, // Set the layout here
      children: [
        {
          path: '/',
          element: <Dashboard />, // Child routes will be rendered inside the Outlet in MainLayout
        },
        {
          path: "exchange",
          element: <Exchange />,
        },
        {
          path: "wallet",
          element: <Wallet />,
        },
        {
          path: "transactions",
          element: <Transactions/>,
        },
        {
          path: "analytics",
          element: <Analytics/>,
        },
        {
          path: "messages",
          element: <Messages/>,
        },
        {
          path: "help-center",
          element: <HelpCenter/>,
        },
        {
          path: "settings",
          element: <Settings/>,
        },
      ],
    },
  ]);
  
  
  export default router;
  