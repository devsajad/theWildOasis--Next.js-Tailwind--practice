// import { NextResponse } from "next/server";
// export function middleware(request) {
//   //   return NextResponse.next();
//   console.log(request.url);
//   const url = new URL("/about", request.url);

//   return NextResponse.redirect(url);
// }

import { auth } from "@/app/_lib/auth";
export const middleware = auth;

export const config = {
  matcher: ["/account/:path*"],
};
