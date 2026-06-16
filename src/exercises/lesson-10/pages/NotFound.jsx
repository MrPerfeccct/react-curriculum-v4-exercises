import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section>
      <h2>404: Not Found</h2>

      <p>
        Invalid path: <code>{pathname}</code>
      </p>

      <Link to="/">Back Home</Link>
    </section>
  );
}
