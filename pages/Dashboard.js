import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
const Dashboard = ({ summaryData }) => {
  return (
    <div>
      <div className='site-statistic-demo-card mt-4'>
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={8} className='mb-4'>
            <Card>
              <Statistic
                title={`Administered doses`}
                value={summaryData.total_vaccinations}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={false}
                suffix=''
              />
              <Statistic
                title={``}
                value={summaryData.change_vaccinations}
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
                value={summaryData.total_vaccines_distributed}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={false}
                suffix=''
              />
              <Statistic
                title=''
                value={`${(summaryData.total_vaccinations * 100) / summaryData.total_vaccines_distributed}`}
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
                value={`${summaryData.total_vaccinations / summaryData.total_vaccines_distributed}`}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={false}
                suffix='%'
              />
              <Statistic
                title=''
                value={`${summaryData.total_vaccinations / summaryData.total_vaccines_distributed}`}
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
