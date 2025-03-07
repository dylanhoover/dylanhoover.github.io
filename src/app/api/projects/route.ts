import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import Project from '../../../models/Project';

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({});
    return NextResponse.json(projects);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Error fetching projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const project = await Project.create(body);
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Error creating project' }, { status: 500 });
  }
} 