import { Alert, Card, Row, Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
export default function Header({ someProp }) {
  return (
    <>
      {/* <h1>Navigation {someProp ? someProp.last_updated : 'prop data not available'}</h1> */}
      <Alert
        message='Informational Notes'
        description={`Last updated ${moment(someProp ? someProp.last_updated : 'prop data not available').format(
          'dddd, MMMM Do YYYY, h:mm:ss a'
        )}`}
        type='info'
        showIcon
        className='my-4'
      />
    </>
  );
}
