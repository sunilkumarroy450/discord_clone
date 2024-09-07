//

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|next).*)", "/", "/(api|trpc)(.*)"],
};
