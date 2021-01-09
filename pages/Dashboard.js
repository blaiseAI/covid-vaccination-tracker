import { Statistic, Card, Row, Col, Divider, Tooltip } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, ExclamationCircleTwoTone, TableOutlined } from '@ant-design/icons';
import styles from '../styles/Home.module.css';
import moment from 'moment';
import Provinces from './Provinces';
const Dashboard = ({ summaryData, data }) => {
  const totalVaccination = summaryData ? summaryData.total_vaccinations : 0;
  const totalDistributed = summaryData ? summaryData.total_vaccines_distributed : 0;
  const totalDeliveredPercentage = (totalVaccination * 100) / totalDistributed;
  const populationPercentageVaccinated = (totalVaccination * 100) / 37894799;
  return (
    <div>
      <div className='site-statistic-demo-card mt-4'>
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={8} className='mb-4'>
            <Card>
              <Statistic
                title={`Administered doses`}
                value={summaryData ? summaryData.total_vaccinations : 0}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={false}
                suffix=''
              />
              <Statistic
                title={``}
                value={summaryData ? summaryData.change_vaccinations : 0}
                precision={0}
                valueStyle={{ color: '#3f8600', fontSize: '12px' }}
                prefix={<ArrowUpOutlined />}
                suffix='Today'
              />
            </Card>{' '}
          </Col>{' '}
          <Col xs={24} sm={12} lg={8} className='mb-4'>
            <Card>
              <Statistic
                title={`Delivered doses`}
                value={summaryData ? summaryData.total_vaccines_distributed : 0}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={false}
                suffix=''
              />
              <Statistic
                title=''
                value={`${summaryData ? totalDeliveredPercentage : 0}`}
                precision={2}
                valueStyle={{ color: '#3f8600', fontSize: '12px' }}
                prefix={<ArrowDownOutlined />}
                suffix='% of doses delivered have been administered'
              />
            </Card>{' '}
          </Col>{' '}
          <Col xs={24} sm={12} lg={8} className='mb-4'>
            <Card>
              <Statistic
                title={`Population percentage`}
                value={`${summaryData ? populationPercentageVaccinated : 0}`}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={false}
                suffix='%'
              />
              <Statistic
                title=''
                value={`${summaryData ? populationPercentageVaccinated : 0}`}
                precision={2}
                valueStyle={{ color: '#3f8600', fontSize: '12px' }}
                prefix={<ArrowDownOutlined />}
                suffix='% of the Canadian population has received at least one dose'
              />
            </Card>{' '}
          </Col>{' '}
        </Row>{' '}
        <Row gutter={16}>
          <Col span={12} xs={24} sm={24} lg={12} className='mb-4'>
            <Card
              title='Covid-19 Vaccinations in Canada'
              bordered={true}
              className={styles.scrollable}
              extra={
                <Tooltip placement='leftTop' title='Covid-19 Vaccination Summary'>
                  <ExclamationCircleTwoTone twoToneColor='#eb2f96' />
                </Tooltip>
              }
            >
              <p>
                As of <strong>{moment(data ? data.last_updated : '').format('dddd')}</strong> at{' '}
                {moment(data ? data.last_updated : '').format('hh:mm a')}, more than{' '}
                <strong>{summaryData ? summaryData.total_vaccinations : 0}</strong> doses of approved COVID-19 vaccines
                have been administered across Canada.
              </p>
              <p>
                In total, <strong>{summaryData ? summaryData.total_vaccines_distributed : 0}</strong> doses of COVID-19
                vaccines (including both Moderna and Pfizer-BioNTech) have been delivered to the provinces for
                administration. As of today, <strong>{Math.round(totalDeliveredPercentage * 100) / 100}%</strong> of
                doses delivered to the provinces have been administered.
              </p>
              <p>
                The Pfizer-BioNTech and Moderna vaccines require two doses, a number of weeks apart, for full efficacy.
                Consequently, the values we report indicate the total number of doses administered to Canadians. Until
                early January, this value will also be equivalent to the total number of people who have received at
                least one dose. As of today, more than{' '}
                <strong>{summaryData ? summaryData.total_vaccinations : 0}</strong> Canadians have received at least one
                dose of an approved COVID-19 vaccine.
              </p>
              <Divider orientation='left' plain>
                Left Text
              </Divider>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare,
                quae sunt a te dicta? Refert tamen, quo modo.
              </p>
            </Card>
          </Col>
          <Col span={12} xs={24} sm={24} lg={12} className='mb-4'>
            <Card title='Map' bordered={true} className={styles.scrollable}>
              Card content
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24} xs={24} sm={24} lg={24} className='mb-4'>
            <Card title='Doses By Province' bordered={true} extra={<TableOutlined />}>
              <Provinces />
            </Card>
          </Col>
        </Row>
      </div>{' '}
    </div>
  );
};

export default Dashboard;
