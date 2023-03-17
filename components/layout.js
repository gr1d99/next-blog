import React from 'react';
import Head from 'next/head';
import {
  arrayOf, oneOfType, node, bool,
} from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Gideon Kimutai';
export const siteTitle = 'Next.js Sample Website';

function RootLayout({ children, home }) {
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex items-center flex-col">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpeg"
              className="object-contain rounded-full"
              height={144}
              width={144}
              alt=""
            />
            <h1 className="font-bold text-xl leading-5">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpeg"
                className=""
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className="">
              <Link href="/" className="">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="flex justify-start">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}

RootLayout.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  home: bool.isRequired,
};

export default RootLayout;
