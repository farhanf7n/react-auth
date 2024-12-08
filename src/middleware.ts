export function middleware(request: Request) {
  const url = new URL(request.url);

  if (url.pathname.startsWith("/dashboard")) {
    if (!localStorage.getItem("token")) {
      return Response.redirect(new URL("/login", url));
    }
  }

  return new Response();
}

export const config = {
  matcher: "/dashboard/:path*",
};
