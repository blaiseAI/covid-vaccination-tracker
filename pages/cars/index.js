import Link from 'next/link';
export default function Home() {
  return (
    <>
      <h1>List of cars</h1>
      <ul>
        <li>
          <Link href='/cars/tesla'>
            <a>Tesla</a>
          </Link>
        </li>
        <li>
          <Link href='/cars/ford'>
            <a>Ford</a>
          </Link>
        </li>
        <li>
          <Link href='/cars/lambo'>
            <a>Lambo</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
