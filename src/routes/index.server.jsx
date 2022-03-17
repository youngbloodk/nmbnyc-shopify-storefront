import {useShopQuery, Seo, CacheDays} from '@shopify/hydrogen';
import {HomeSeoFragment} from '@shopify/hydrogen/fragments';
import gql from 'graphql-tag';

import Layout from '../components/Layout.server';
import {Suspense} from 'react';

export default function Index() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <SeoForHomepage />
      </Suspense>
      <div className="relative mb-12"></div>
    </Layout>
  );
}

function SeoForHomepage() {
  const {
    data: {
      shop: {title, description},
    },
  } = useShopQuery({
    query: SEO_QUERY,
    cache: CacheDays(),
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title,
        description,
      }}
    />
  );
}

const SEO_QUERY = gql`
  query homeShopInfo {
    shop {
      ...HomeSeoFragment
    }
  }
  ${HomeSeoFragment}
`;
