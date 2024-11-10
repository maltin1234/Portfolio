import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful!



export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      
      authorize: async (credentials) => {
       
        
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/token/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

   // Check if the response is OK
   if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Invalid credentials.");
  }

  const user = await response.json();
  console.log(user, "User data from backend");

  // Check if user exists and has a valid token
  if (user && user.access) {
    return {
      email: credentials.email,
      accessToken: user.access,
      // Add any other user information here
    };
  }

  throw new Error("Invalid credentials.");
} catch (error) {
  console.error("Authorization error:", error);
  throw new Error("Authorization error. Please try again."); // Custom error message
}
},
    }),
  ],
});
