import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'GenZ Stoic';
export const siteTitle = 'GenZ Stoic';

interface Props {
  children: React.ReactNode;
  home?: boolean;
  title: string;
  description: string;
  image: string;
}

// function numToHex(num: number) {
//   const hex = num.toString(16);
//   return hex.length == 1 ? '0' + hex : hex;
// }

export default function Layout({
  children,
  home,
  title = siteTitle,
  description = 'Genz Stoic Blog',
  image = '/images/profile.jp',
}: Props): JSX.Element {
  // const [bgValue, setBgValue] = useState(17);

  // const handleBgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setBgValue(parseInt(event.target.value));
  // };

  // useEffect(() => {
  //   const html = document.getElementsByTagName('html')[0];
  //   const body = document.getElementsByTagName('body')[0];
  //   html.style.backgroundColor = `rgb(${bgValue}, ${bgValue}, ${bgValue})`;
  //   body.style.backgroundColor = `rgb(${bgValue}, ${bgValue}, ${bgValue})`;
  // }, [bgValue]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/Montserrat/Montserrat-Regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Montserrat/Montserrat-Bold.ttf" as="font" crossOrigin="" />
        <meta name="description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta name="theme-color" content="#0F0F0F" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {process.env.NODE_ENV === 'development' && <script src="/scripts/noScroll.js" type="text/javascript" />}
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <>
            {/*
            <div className={styles.bgSliderContainer}>
              <input
                onChange={handleBgChange}
                type="range"
                min="1"
                max="255"
                value={bgValue}
                className={styles.bgSlider}
                id="myRange"
              />
            </div>
            */}
            {home ? (
              <>
                <Image
                  priority={true}
                  src="/images/profile.jpg"
                  width={140}
                  height={140}
                  className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                  alt="Digital art by Werner Hornung"
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
                <section className={`${utilStyles.headingMd} ${utilStyles.lightText}`}>
                  <p>an unexamined life is not worth living</p>
                </section>
              </>
            ) : (
              <>
                <Link href="/">
                  <a>
                    <Image
                      priority={true}
                      src="/images/profile.jpg"
                      width={80}
                      height={80}
                      className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                      alt="Digital art by Werner Hornung"
                    />
                  </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2>
                <section className={utilStyles.lightText}>
                  <p style={{ marginTop: 0, marginBottom: 10 }}>an unexamined life is not worth living</p>
                </section>
              </>
            )}
          </>
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
