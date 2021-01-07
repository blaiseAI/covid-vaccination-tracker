import { Alert, Card, Row, Col } from 'antd';
import moment from 'moment';
export default function Home({ summary }) {
  return (
    <>
      <h1> Covid - 19 Vaccine Tracker | Canada </h1>
      <Alert
        message='Informational Notes'
        description={`Last updated ${moment(summary.last_update).format('dddd, MMMM Do YYYY, h:mm:ss a')}`}
        type='info'
        showIcon
        className='mt-4'
      />
    </>
  );
}
