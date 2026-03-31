import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container emptyState">
        <span className="eyebrow">404</span>
        <h1>Page not found.</h1>
        <p>The requested Empire Fence page is not available.</p>
        <Link href="/" className="button button--primary">
          Return home
        </Link>
      </div>
    </section>
  );
}
