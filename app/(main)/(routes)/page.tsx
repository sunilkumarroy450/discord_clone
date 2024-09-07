//

// app/(main)/page.tsx

// app/(main)/page.tsx

// "use client"; // This makes the component a client component

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@clerk/nextjs";

// export default function HomePage() {
//   const { isSignedIn } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isSignedIn) {
//       router.push("/sign-up");
//     }
//   }, [isSignedIn, router]);

//   return (
//     <div>
//       {/* Protected content */}
//       <h1>Welcome to the Discord Clone!</h1>
//     </div>
//   );
// }

// app/(main)/page.tsx

import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { ModeToggle } from "@/components/mode-toggle";

export default async function HomePage() {
  // Get the authentication state from the server-side
  const { userId } = auth();

  // If the user is not authenticated, redirect to the sign-up page
  if (!userId) {
    redirect("/sign-up");
  }

  // If authenticated, render the protected content
  return (
    <div>
      <h1>Welcome to the Discord Clone!</h1>
      <ModeToggle />
    </div>
  );
}
