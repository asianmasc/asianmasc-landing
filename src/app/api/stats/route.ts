import { NextResponse } from "next/server";
import { MEMBER_COUNT } from "@/lib/constants";

// Count is baked in at build time from Discord stats channel
export async function GET() {
  return NextResponse.json({ 
    count: MEMBER_COUNT, 
    source: "build-time" 
  });
}
