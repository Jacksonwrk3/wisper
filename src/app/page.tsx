"use client";
import Button from "./components/Button/index.client";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { SessionContext } from "@/context/SessionContext.client";
export default function LandingPage() {
  const { session } = useContext(SessionContext);
  const router = useRouter();
  if (session !== null && session !== "Error" && typeof session === "object") {
    router.replace("/home");
  } else {
    return (
      <main>
        Landing Page
        <div className="flex space-x-3 px-2">
          <Button variant="secondary">
            <Link href="/authflow/login">Login</Link>
          </Button>
          <Button variant="primary">
            <Link href="/authflow/signup">Sign Up</Link>
          </Button>
        </div>
      </main>
    );
  }
}
