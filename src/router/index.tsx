import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import LoginPage from '../pages/authen/LoginPage.tsx';
import HomePage from '../pages/home/HomePage.tsx';
import InvoicesPage from '../pages/invoice/InvoicesPage.tsx';
import InvoiceDetailsPage from '../pages/invoice/InvoiceDetailsPage.tsx';
import OrderDetailsPage from '../pages/order/OrderDetailsPage.tsx';
import OrderTransactionsPage from '../pages/transaction/OrderTransactionsPage.tsx';
import ProductsPage from '../pages/product/ProductsPage.tsx';
import NewProductPage from '../pages/product/NewProductPage.tsx';
import ProductDetailsPage from '../pages/product/ProductDetailsPage.tsx';
import CustomersPage from '../pages/customer/CustomersPage.tsx';
import CustomerDetailsPage from '../pages/customer/CustomerDetailsPage.tsx';
import MenuPage from '../pages/menu/MenuPage.tsx';
import EditMenuPage from '../pages/menu/EditMenuPage.tsx';
import NewOrderPage from '../pages/order/NewOrderPage.tsx';
import NotFoundPage from '../pages/NotFoundPage.tsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/home', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/invoices', element: <InvoicesPage /> },
  { path: '/invoices/:customerId', element: <InvoiceDetailsPage /> },
  { path: '/invoices/:customerId/orders/:orderId', element: <OrderDetailsPage /> },
  { path: '/invoices/:customerId/orders/:orderId/transactions',element: <OrderTransactionsPage /> },
  { path: '/products', element: <ProductsPage /> },
  { path: '/products/:productId', element: <ProductDetailsPage /> },
  { path: '/products/new', element: <NewProductPage /> },
  { path: '/customers', element: <CustomersPage /> },
  { path: '/customers/:customerId', element: <CustomerDetailsPage /> },
  { path: '/menu', element: <MenuPage /> },
  { path: '/menu/edit', element: <EditMenuPage /> },
  { path: '/orders/new', element: <NewOrderPage /> },
  { path: '*', element: <NotFoundPage /> },
]);

export default router;