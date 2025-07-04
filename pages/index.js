// pages/index.js
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>React Calculator App</h1>
      <Image
        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Close-up of a computer screen displaying programming code in a dark environment."
        width={4288}
        height={2848}
      />
      <Link href="/sentry-example-page">
        <a>Sentry Example Page</a>
      </Link>
    </div>
  );
}