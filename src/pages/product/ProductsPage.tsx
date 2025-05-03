import React from 'react'
import { Link, useSearchParams } from 'react-router-dom';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'product';
  const validTabs = ['product', 'company', 'category'];
  const activeTab = validTabs.includes(tab) ? tab : 'product';

  return (
    <div>
      <h1>Products Page</h1>
      <nav>
        <Link to="/products?tab=product">Product</Link> |{' '}
        <Link to="/products?tab=company">Company</Link> |{' '}
        <Link to="/products?tab=category">Category</Link>
      </nav>
      <div>Showing {activeTab} tab content</div>
    </div>
  );
}

export default ProductsPage
