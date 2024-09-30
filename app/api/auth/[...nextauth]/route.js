// ./app/api/auth/[...nextauth]/route.ts

import { handlers } from "@/auth";  // Refers to the `auth.ts` we just created

export const { GET, POST } = handlers;  // Map GET and POST HTTP methods to the handlers
