import { Table } from 'antd';
const columns = [
  {
    title: 'Province Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Total Doses Administered',
    dataIndex: 'total_vaccinations',
    sorter: {
      compare: (a, b) => a.total_vaccinations - b.total_vaccinations,
      multiple: 3,
    },
  },
  {
    title: 'Total Doses Delivered',
    dataIndex: 'total_vaccines_distributed',
    sorter: {
      compare: (a, b) => a.total_vaccines_distributed - b.total_vaccines_distributed,
      multiple: 2,
    },
  },
  {
    title: '% of Doses Administered',
    dataIndex: 'percentageAdministered',
  },
  {
    title: 'Doses Administered / 100k Population',
    dataIndex: 'doseAdministered',
  },
];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     chinese: 98,
//     math: 60,
//     english: 70,
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     chinese: 98,
//     math: 66,
//     english: 89,
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     chinese: 98,
//     math: 90,
//     english: 70,
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     chinese: 88,
//     math: 99,
//     english: 89,
//   },
// ];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
const Provinces = ({ provinceData }) => {
  console.log(provinceData);
  return <Table columns={columns} dataSource={provinceData ? provinceData : 'No data available'} onChange={onChange} />;
};

export default Provinces;
