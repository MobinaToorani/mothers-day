import fs from 'fs';
import path from 'path';

export function readJsonFile<T>(filename: string): T {
  const filePath = path.join(process.cwd(), 'content', filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content) as T;
}

export function readMarkdownFile(filename: string): string {
  const filePath = path.join(process.cwd(), 'content', filename);
  return fs.readFileSync(filePath, 'utf-8');
}
