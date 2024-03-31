import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/shared">shared 페이지</Link>
      <br />
      <Link href="/folder">folder 페이지</Link>
    </div>
  );
}
