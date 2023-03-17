import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RootLayout from '../../components/layout';
import Home from '../index';

export default function FirstPost() {
  return (
    <RootLayout home={false}>
      <main>
        <div className="">
          <div>
            <h1>First Post</h1>
            <h2><Link href="/">Back Home!</Link></h2>
          </div>
        </div>
        <div className="">
          <Image src="/images/profile.jpeg" alt="Profile Image" height={144} width={144} />
        </div>
      </main>
    </RootLayout>
  );
}

export async function getStaticProps() {
  const data = { id: 1, content: 'hello' };

  return {
    props: data,
  };
}
