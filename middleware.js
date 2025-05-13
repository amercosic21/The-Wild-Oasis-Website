import { NextResponse } from "next/server";
import { auth } from "@/app/_lib/auth";

export async function middleware(request) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  if (pathname === "/login" && session?.user) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/account") && !session?.user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname === "/cabins/thankyou" && !session?.user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// export const middleware = auth;

export const config = {
  matcher: ["/login", "/account/:path*", "/cabins/thankyou"],
};
