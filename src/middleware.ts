import type { NextRequest } from "next/server";
import { NextResponse as res } from "next/server";

export const config = {
  matcher: ["/graphql", "/backend/:path*"],
};

export default async function middleware(req: NextRequest) {
  const pathName = req.nextUrl.pathname;
  if (pathName.startsWith("/graphql")) {
    const url = `${process.env.NEXT_GRAPHQL_API_ENDPOINT}${pathName.replace(/\/graphql/, "/graphql")}`;
    return res.rewrite(url);
  }

  if (pathName.startsWith("/backend")) {
    const url = `${process.env.API_ENDPOINT}${pathName.replace(/\/backend/, "")}`;

    return res.rewrite(url);
  }

  return res.next();
}
