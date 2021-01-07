export default function Header({ someProp }) {
  return <h1>Navigation {someProp ? someProp.last_updated : 'prop data not available'}</h1>;
}
