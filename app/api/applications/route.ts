import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { z } from 'zod';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Validation schema
const applicationSchema = z.object({
  jobId: z.string().min(1, 'Job ID is required'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  portfolio: z.string().url('Invalid portfolio URL').optional().or(z.literal('')),
  linkedIn: z.string().url('Invalid LinkedIn URL').optional().or(z.literal('')),
  github: z.string().url('Invalid GitHub URL').optional().or(z.literal('')),
  coverLetter: z.string().optional(),
  // Allow relative paths for resume URLs (e.g., /uploads/resumes/file.pdf)
  resumeUrl: z.string().min(1, 'Resume URL is required'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request data
    const validatedData = applicationSchema.parse(body);

    // Create the application in the database
    const application = await prisma.jobApplication.create({
      data: {
        jobId: validatedData.jobId,
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone || null,
        portfolio: validatedData.portfolio || null,
        linkedIn: validatedData.linkedIn || null,
        github: validatedData.github || null,
        coverLetter: validatedData.coverLetter || null,
        resumeUrl: validatedData.resumeUrl || null,
        status: 'PENDING',
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully!',
        applicationId: application.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting application:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit application. Please try again.',
      },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve applications (for admin use later)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get('jobId');
    const status = searchParams.get('status');

    const applications = await prisma.jobApplication.findMany({
      where: {
        ...(jobId && { jobId }),
        ...(status && { status: status as any }),
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ success: true, applications }, { status: 200 });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch applications.',
      },
      { status: 500 }
    );
  }
}

