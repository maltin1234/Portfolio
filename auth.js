import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"; // Import Credentials provider
import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "pg";

// Setup PostgreSQL connection pool
const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PostgresAdapter(pool), // Use the PostgreSQL adapter
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      // Specify which fields should be submitted
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          // logic to salt and hash password
          const pwHash = saltAndHashPassword(credentials.password);

          // Call the DRF backend for authentication
          const res = await fetch(`${process.env.DRF_BACKEND_URL}/api/token/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              password: pwHash,
            }),
          });

          if (!res.ok) {
            throw new Error("Invalid login credentials");
          }

          const user = await res.json();

          // If user is found, return the user object
          if (user) {
            return user;
          } else {
            // Return null if authentication failed
            return null;
          }
        } catch (error) {
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Store the user token (if any) in the JWT token
      if (user) {
        token.accessToken = user.accessToken; // If your user object has an accessToken
      }
      return token;
    },
    async session({ session, token }) {
      // Include the token in the session object
      session.accessToken = token.accessToken; 
      return session;
    }
  },
});
