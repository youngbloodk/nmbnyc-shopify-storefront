import {Link} from '@shopify/hydrogen/client';

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation({menu, children}) {
  return (
    <nav>
      <ul className="flex flex-wrap space-x-3 justify-end">
        {menu.map((link) => (
          <li key={link.title}>
            <Link to={`/${link.handle}`} className="hover:opacity-80 uppercase">
              {link.title}
            </Link>
          </li>
        ))}
        <li>{children}</li>
      </ul>
    </nav>
  );
}
