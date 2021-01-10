// import { Table } from 'antd';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
const Provinces = ({ provinceData }) => {
  return (
    <>
      <BootstrapTable data={provinceData} striped hover pagination>
        <TableHeaderColumn isKey dataField='code'>
          Province ID
        </TableHeaderColumn>
        <TableHeaderColumn dataField='name' dataSort={true}>
          Province Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField='total_vaccinations'>Total Doses Administered</TableHeaderColumn>
        <TableHeaderColumn dataField='percentageAdministered'>% of Doses Administered</TableHeaderColumn>
        <TableHeaderColumn dataField='doseAdministered'>Doses Administered / 100k Population</TableHeaderColumn>
      </BootstrapTable>
    </>
  );
  //   return <Table columns={columns} dataSource={provinceData ? provinceData : 'No data available'} onChange={onChange} />;
};

export default Provinces;
