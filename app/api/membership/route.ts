import { Inputs } from "@/lib/schema";
import fs from "fs";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid"
import path from "path";

export async function GET(req: NextRequest) {
  return NextResponse.json("Hello");
}

export async function POST(req: NextRequest) {
  const filePath = path.resolve("./", "secrets.json");
  try {
    const data = (await req.json()) as Inputs;
    const auth = new google.auth.GoogleAuth({
			credentials: {
				type: "service_account",
				client_email: process.env.CLIENT_EMAIL,
				token_url: "https://oauth2.googleapis.com/token",
				project_id: process.env.PROJECT_ID,
				private_key: process.env.PRIVATE_KEY,
				client_id: process.env.CLIENT_ID,
			},
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:L1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
						nanoid(),
            data.fullname,
            data.email,
            data.gender,
            data.phonenumber,
						new Date(data.dateofbirth).toDateString(),
            data.nationality,
            data.university,
            data.course,
            data.yearofstudy,
            data.employmentstatus,
            data.note,
						new Date().toUTCString()
          ],
        ],
      },
    });

    return NextResponse.json(response.data, {
      status: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json("An error occured in the client", { status: 500 });
  }
}
