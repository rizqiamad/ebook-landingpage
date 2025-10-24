import { NextRequest, NextResponse } from 'next/server';

const midtrans_endpoint =
  process.env.NODE_APP === 'production'
    ? process.env.MIDTRANS_ENDPOINT_PRODUCTION
    : process.env.MIDTRANS_ENDPOINT_SANDBOX;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const res = await fetch(midtrans_endpoint as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Basic ' +
        Buffer.from(process.env.MIDTRANS_SERVER_KEY + ':').toString('base64'),
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
