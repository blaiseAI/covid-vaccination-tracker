import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
const Dashboard = ({ summaryData }) => {
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
      </div>{' '}
    </div>
  );
};

export default Dashboard;
