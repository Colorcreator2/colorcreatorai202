import { Link } from "react-router-dom";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-semibold gradient-text">
          404
        </h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow"
            style={{ background: "var(--gradient-cinematic, #7c3aed)" }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundComponent;