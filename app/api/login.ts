// pages/api/login.js
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
    const { email, password }:any = req.body;

    try {
      const response = await axios.post('https://localhost/signin', {
        email,
        password,
      });

      const { token } = response.data.token;
      res.status(200).json({ token });
    } catch (error:any) {
      console.error('Login error:', error.response?.data || error.message);
      res.status(401).json({ message: 'Login failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
