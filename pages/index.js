import React from 'react';
import Head from 'next/head';
import {
  arrayOf, shape, string,
} from 'prop-types';
import RootLayout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

export default function Home(props) {
  const { allPostsData } = props;
  return (
    <RootLayout home>
      <Head>
        <title className="bg-red-500">{siteTitle}</title>
      </Head>
      <section className="flex justify-center pt-4">
        <ul>
          {allPostsData.map((post) => (
            <li key={post.id} className="my-4">
              <article className="inline-flex flex-col border border-sm p-2 rounded w-full">
                <h1 className="antialiased font-semibold">
                  {post.title}
                </h1>
                <small className="antialiased text-right mt-2">
                  Created:
                  {post.date}
                </small>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </RootLayout>
  );
}

Home.defaultProps = {
  allPostsData: [],
};

Home.propTypes = {
  allPostsData: arrayOf(shape({ id: string, date: string, title: string })),
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
