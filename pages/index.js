import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
export default function Home({ summary }) {
  return (
    <div className='container-fluid'>
      <Head>
        <title> Covid-19 | Vaccination Tracker </title> <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Hello {summary.last_updated}</h1>
      </main>
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />{' '}
        </a>{' '}
      </footer>{' '}
    </div>
  );
}
export async function getServerSideProps({ params }) {
  const req = await fetch(`https://api.covid19tracker.ca/summary`);
  const data = await req.json();

  return {
    props: { summary: data },
  };
}
