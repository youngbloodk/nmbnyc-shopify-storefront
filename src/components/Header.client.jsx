import {Link, Image} from '@shopify/hydrogen/client';

import CartToggle from './CartToggle.client';
import Navigation from './Navigation.client';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({menu}) {
  return (
    <header className="h-20 lg:h-32" role="banner">
      <div className={'fixed z-20 h-20 lg:h-32 w-full p-4 mx-auto'}>
        <div className="h-full flex lg:flex-col place-content-between">
          <div className="text-center w-full flex justify-between items-center">
            <Link to="/">
              <Image
                className="w-24"
                src="/NMB-New-York-logo-lg.png"
                width="auto"
                height="auto"
              />
            </Link>
            <div className="space-x-3 max-w-xs">
              <Navigation menu={menu}>
                <CartToggle />
              </Navigation>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
