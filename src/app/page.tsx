import Button from "./components/Button/index.client";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      Landing Page
      <div className="flex space-x-3 px-2">
        <Button variant="secondary">
          <Link href="login">Login</Link>
        </Button>
        <Button variant="primary">
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </main>
  );
}
