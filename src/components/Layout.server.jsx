import {
  // useShopQuery,
  // flattenConnection,
  LocalizationProvider,
  // CacheHours,
} from '@shopify/hydrogen';
// import {ImageFragment} from '@shopify/hydrogen/fragments';
// import gql from 'graphql-tag';

import Header from './Header.client';
// import Footer from './Footer.server';
import Cart from './Cart.client';
import {Suspense} from 'react';

/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export default function Layout({children, hero}) {
  // const {data} = useShopQuery({
  //   query: QUERY,
  //   variables: {
  //     numCollections: 3,
  //   },
  //   cache: CacheHours(),
  //   preload: '*',
  // });
  // const collections = data ? flattenConnection(data.collections) : null;
  // const products = data ? flattenConnection(data.products) : null;
  const menu = [
    {title: 'Home', handle: ''},
    {title: 'Shop', handle: 'shop'},
    {title: 'About', handle: 'about'},
    {title: 'Upcycling', handle: 'upcycling'},
    {title: 'Press', handle: 'press'},
  ];
  return (
    <LocalizationProvider preload="*">
      <div className="text-black text-sm font-sans">
        {/* TODO: Find out why Suspense needs to be here to prevent hydration errors. */}
        <Suspense fallback={null}>
          <Header menu={menu} />
          <Cart />
        </Suspense>
        <main role="main" id="mainContent" className="relative">
          {hero}
          <div className="relative">{children}</div>
        </main>
        {/* <Footer collection={collections[0]} product={products[0]} /> */}
      </div>
    </LocalizationProvider>
  );
}

// const QUERY = gql`
//   query layoutContent($numCollections: Int!) {
//     collections(first: $numCollections) {
//       edges {
//         node {
//           description
//           handle
//           id
//           title
//           image {
//             ...ImageFragment
//           }
//         }
//       }
//     }
//     products(first: 1) {
//       edges {
//         node {
//           handle
//         }
//       }
//     }
//   }
//   ${ImageFragment}
// `;
