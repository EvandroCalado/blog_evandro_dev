import Link from 'next/link';
import Heading from '../components/Heading/Heading';

export default function Home() {
  return (
    <div>
      <Heading title="Home" />
      <Link href={'/blog'} className="underline">
        Postagens
      </Link>
    </div>
  );
}
