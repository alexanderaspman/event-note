// app/api/login/route.js
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest) {
  const { email, password } = await req.json();

  try {
    const response = await axios.post('https://localhost:3003/signin', {
      email,
      password,
    });

    const { token } = response.data;

    // Set a cookie (if preferred)
    return NextResponse.json({ token }, {
      headers: {
        'Set-Cookie': `token=${token}; HttpOnly; Path=/`,
      },
    });
  } catch (error:any) {
    console.error('Login error:', error.response?.data || error.message);
    return NextResponse.json({ message: 'Login failed' }, { status: 401 });
  }
}
