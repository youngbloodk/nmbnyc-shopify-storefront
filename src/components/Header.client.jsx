import {Link, Image} from '@shopify/hydrogen/client';

import CartToggle from './CartToggle.client';
import Navigation from './Navigation.client';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({menu}) {
  return (
    <header className="h-20 lg:h-32" role="banner">
      <div
        className={
          'fixed z-20 h-20 lg:h-32 w-full px-6 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto bg-white'
        }
      >
        <div className="h-full flex lg:flex-col place-content-between">
          <div className="text-center w-full flex justify-between items-center">
            <Link
              className="font-black uppercase text-3xl tracking-widest"
              to="/"
            >
              <Image
                className="w-24"
                src="/NMB-New-York-logo.png"
                width="auto"
                height="auto"
              />
            </Link>
            <div className="flex space-x-3 align-middle">
              <Navigation menu={menu} />
              <CartToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
