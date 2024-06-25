import { NextApiResponse } from 'next';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const allCookies = cookies();
  const token = allCookies.get('token');

 

  const data = await (await fetch('http://localhost:3003/api/product', {
      method: 'POST',
      headers: {
          "Authorization": ("Bearer " + await token?.value),
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(await request.json()),
  })).json();


}