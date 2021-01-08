import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Header from './header';
import Dashboard from './Dashboard';
export default function Home({ data }) {
  const dataNumbers = [...data.data];
  return (
    <div className='container-fluid'>
      <Head>
        <title> Covid - 19 | Vaccination Tracker </title> <link rel='icon' href='/favicon.ico ' />{' '}
      </Head>{' '}
      <Header someProp={data} />{' '}
      <main>
        {/* {console.log(dataNumbers)} */}
        {/* <Dashboard summaryData={data} /> */}
        {dataNumbers.map((summary, index) => (
          <Dashboard summaryData={summary} key={index} />
        ))}
      </main>{' '}
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
  const jsonData = await req.json();

  return {
    props: { data: jsonData },
  };
}
