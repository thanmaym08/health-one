import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)']);

export default clerkMiddleware((auth, req) => {
  // Check if auth is undefined or if userId is not present
  const { userId } = auth() || {};

  // Redirect to sign-in if the user is not authenticated and trying to access protected routes
  if (!userId && isProtectedRoute(req)) {
    console.log('Unauthorized access attempt to:', req.url); // Log unauthorized access
    return auth().redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
