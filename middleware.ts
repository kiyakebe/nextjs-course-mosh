//  1
// import { NextRequest, NextResponse } from "next/server";
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("./new-path", request.url));
// }

// 2
// import middleware from "next-auth/middleware";
// export default middleware

// 3
export { default } from "next-auth/middleware";


export const config = {
  // *: zero or more
  // +: one or more
  // ?: zeor or one
  matcher: ['/users/:id*'],
};


/*
only runs when the url in the matcher list match with the request url

we can implement the middleware function or get the default next bultin middleware

*/