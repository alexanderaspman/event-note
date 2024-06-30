import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  
  const response = await fetch('http://localhost:3003/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(await request.json()),
  });

  const data = await response.json();

  if (response.ok) {
    const token = data.token;
    const responseWithCookie = NextResponse.json({ success: true });
    responseWithCookie.cookies.set('token', token, { path: '/' });
    return responseWithCookie;
  } else {
    return NextResponse.json({ success: false, error: data.error }, { status: response.status });
  }
}