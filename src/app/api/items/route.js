import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  // JSONファイルのパス
  const filePath = path.join(process.cwd(), 'data', 'items.json');
  // ファイル読み込み
  const jsonData = await fs.readFile(filePath, 'utf-8');
  // JSONをパース
  const items = JSON.parse(jsonData);

  return NextResponse.json(items);
}