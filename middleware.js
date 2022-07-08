import { NextResponse } from 'next/server';

export function middleware(req) {
  console.log(`Evaluating middleware on ${req.nextUrl.pathname}`);
  return NextResponse.next();
}

const testPath = '/test-page';
export const config = {
  matcher: [testPath],
}
