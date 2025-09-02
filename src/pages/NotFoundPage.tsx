import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-6xl font-bold glow-text">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">Page Not Found.</p>
      <p className="mt-2 text-muted-foreground">Looks like you've ventured into the void.</p>
      <Button asChild className="mt-8">
        <Link to="/">Return to Safety</Link>
      </Button>
    </div>
  );
}