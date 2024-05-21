import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not Found</h1>
      <p>Unfortunately we could not find the page you requested.</p>
      <p>
        <Link href="/" className="link">
          {" "}
          Click here
        </Link>{" "}
        to go back to the starting page.
      </p>
    </main>
  );
}
