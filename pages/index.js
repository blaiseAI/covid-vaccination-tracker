import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Statistic, Card, Row, Col, Divider, Tooltip } from 'antd';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { ArrowUpOutlined, ArrowDownOutlined, ExclamationCircleTwoTone, TableOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Header from './header';
import Dashboard from './Dashboard';
import Provinces from './Provinces';
export default function Home({ data, provinceData }) {
  const dataNumbers = [...data.data];
  return (
    <div>
      <Head>
        <title> Covid - 19 | Vaccination Tracker </title> <link rel='icon' href='/favicon.ico ' />{' '}
      </Head>{' '}
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Link href='/' className='navbar-brand'>
          COVID-19 Vaccine Tracker | Canada
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {/* <Nav className='mr-auto'>
            <Link href='/about' className='nav-link'>
              About
            </Link>
            <Link href='/sources' className='nav-link'>
              Sources
            </Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
      <main className='container-fluid'>
        <Header someProp={data} />
        {dataNumbers.map((summary, index) => (
          <Dashboard summaryData={summary} data={data} key={index} />
        ))}
        <Row gutter={16} className=''>
          <Col span={24} xs={24} sm={24} lg={24} className='mb-4'>
            <Card title='Doses By Province' bordered={true} extra={<TableOutlined />}>
              <Provinces provinceData={provinceData} />
            </Card>
          </Col>
        </Row>
      </main>{' '}
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
        | Created with 💙 by{' '}
        <a href='https://seblaise.dev/' className='ml-1'>
          Seblaise
        </a>
      </footer>{' '}
    </div>
  );
}
export async function getServerSideProps() {
  const req = await fetch(`https://api.covid19tracker.ca/summary`);
  const jsonData = await req.json();

  const req1 = await fetch(`https://api.covid19tracker.ca/provinces`);
  const jsonProvinces = await req1.json();

  const provinceCode = ['ON', 'QC', 'NS', 'NB', 'MB', 'BC', 'PE', 'SK', 'AB', 'NL', 'NT', 'YT', 'NU'];
  let items = [];
  for (let i = 0; i < provinceCode.length; i++) {
    let response = await fetch(`https://api.covid19tracker.ca/reports/province/${provinceCode[i]}`);
    let provincesRes = await response.json();
    items.push(provincesRes.data[provincesRes.data.length - 1]);
  }
  let provincesDataResults = jsonProvinces.map((item, i) => Object.assign({}, item, items[i]));
  provincesDataResults.forEach(function (element) {
    element.percentageAdministered = element.total_vaccinations
      ? `${Math.round((element.total_vaccinations * 100) / element.total_vaccines_distributed)}%`
      : '';
    element.doseAdministered = element.total_vaccinations
      ? `${Math.round((element.total_vaccinations * 100000) / element.population)}`
      : '';
  });
  https: return {
    props: { data: jsonData, provinceData: provincesDataResults },
  };
}
