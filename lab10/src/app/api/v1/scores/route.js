import {NextResponse} from 'next/server';
import data from 'lab10/data/fake_game_scores_data.json'

export async function GET() {
  return NextResponse.json(data);
}