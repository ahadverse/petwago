import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Apple from 'next-auth/providers/apple';
import { SignJWT, importPKCS8 } from 'jose';
import { connectDB } from '@petbackend/db';
import User from '@petbackend/models/User';

async function getAppleClientSecret(): Promise<string | null> {
  const { AUTH_APPLE_ID, APPLE_TEAM_ID, APPLE_KEY_ID, APPLE_PRIVATE_KEY } = process.env;
  if (!AUTH_APPLE_ID || !APPLE_TEAM_ID || !APPLE_KEY_ID || !APPLE_PRIVATE_KEY) return null;

  const key = await importPKCS8(APPLE_PRIVATE_KEY.replace(/\\n/g, '\n'), 'ES256');

  return new SignJWT({})
    .setProtectedHeader({ alg: 'ES256', kid: APPLE_KEY_ID })
    .setIssuer(APPLE_TEAM_ID)
    .setIssuedAt()
    .setExpirationTime('5m')
    .setAudience('https://appleid.apple.com')
    .setSubject(AUTH_APPLE_ID)
    .sign(key);
}

export const { handlers, auth, signIn, signOut } = NextAuth(async () => {
  const appleClientSecret = await getAppleClientSecret();

  return {
    providers: [
      Google,
      ...(appleClientSecret
        ? [Apple({ clientId: process.env.AUTH_APPLE_ID, clientSecret: appleClientSecret })]
        : []),
    ],
    session: { strategy: 'jwt' },
    callbacks: {
      async signIn({ user }) {
        if (!user.email) return false;

        await connectDB();
        await User.findOneAndUpdate(
          { email: user.email.toLowerCase() },
          { $set: { name: user.name, image: user.image } },
          { upsert: true, setDefaultsOnInsert: true }
        );

        return true;
      },
      async jwt({ token, user }) {
        if (user?.email) {
          await connectDB();
          const dbUser = await User.findOne({ email: user.email.toLowerCase() });
          if (dbUser) token.userId = dbUser._id.toString();
        }
        return token;
      },
      async session({ session, token }) {
        if (token.userId && session.user) {
          session.user.id = token.userId as string;
        }
        return session;
      },
    },
  };
});
