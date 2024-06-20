import { AccessTokenRequest, getAccessToken } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export default async function MyApi(req:  NextApiRequest , res:  NextApiResponse ): Promise<void> {
  const { accessToken } = await getAccessToken(req, res);
  res.status(200).json({ name: 'John Doe' });
}