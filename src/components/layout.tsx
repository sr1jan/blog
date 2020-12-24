import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'GenZ Stoic';
export const siteTitle = 'GenZ Stoic';

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/Montserrat/Montserrat-Thin.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Montserrat/Montserrat-Light.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Montserrat/Montserrat-Regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Montserrat/Montserrat-Medium.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Montserrat/Montserrat-Bold.ttf" as="font" crossOrigin="" />
        <meta name="description" content="genz stoic" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
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
                <img
                  src="/images/profile.jpg"
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
  );
}
