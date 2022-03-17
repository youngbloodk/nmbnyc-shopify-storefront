import {Link} from '@shopify/hydrogen/client';

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation({menu}) {
  return (
    <nav className="text-center">
      <ul className="max-w-lg flex space-x-3 items-center justify-center">
        {menu.map((link) => (
          <li key={link.id}>
            <Link to={`/${link.handle}`} className="hover:opacity-80 uppercase">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
