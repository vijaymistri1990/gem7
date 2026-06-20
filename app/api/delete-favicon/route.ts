import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const faviconPath = path.join(process.cwd(), 'app', 'favicon.ico');
    if (fs.existsSync(faviconPath)) {
      fs.unlinkSync(faviconPath);
      return NextResponse.json({ success: true, message: 'Favicon deleted' });
    }
    return NextResponse.json({ success: true, message: 'Favicon not found' });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
