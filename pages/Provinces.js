// import { Table } from 'antd';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// const columns = [
//   {
//     title: 'Province Name',
//     dataIndex: 'name',
//     sorter: (a, b) => a.name.length - b.name.length,
//   },
//   {
//     title: 'Total Doses Administered',
//     dataIndex: 'total_vaccinations',
//     sorter: {
//       compare: (a, b) => a.total_vaccinations - b.total_vaccinations,
//       multiple: 3,
//     },
//   },
//   {
//     title: 'Total Doses Delivered',
//     dataIndex: 'total_vaccines_distributed',
//     sorter: {
//       compare: (a, b) => a.total_vaccines_distributed - b.total_vaccines_distributed,
//       multiple: 2,
//     },
//   },
//   {
//     title: '% of Doses Administered',
//     dataIndex: 'percentageAdministered',
//   },
//   {
//     title: 'Doses Administered / 100k Population',
//     dataIndex: 'doseAdministered',
//   },
// ];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
const Provinces = ({ provinceData }) => {
  return (
    <>
      <BootstrapTable data={provinceData} striped hover>
        <TableHeaderColumn isKey dataField='id'>
          Province ID
        </TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Province Name</TableHeaderColumn>
        <TableHeaderColumn dataField='total_vaccinations'>Total Doses Administered</TableHeaderColumn>
      </BootstrapTable>
    </>
  );
  //   return <Table columns={columns} dataSource={provinceData ? provinceData : 'No data available'} onChange={onChange} />;
};

export default Provinces;
