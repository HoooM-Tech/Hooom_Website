import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600 max-w-xl">
        The page you are looking for might have been moved. Lets get you back to
        building with HoooM.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/"
          className="rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-semibold"
        >
          Go home
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-slate-900 text-slate-900 px-5 py-3 text-sm font-semibold"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
