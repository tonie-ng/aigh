import { google } from "googleapis";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
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
      spreadsheetId: process.env.NEWSLETTER_SHEET_ID,
      range: "A1:C1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[nanoid(), data.email, new Date().toUTCString()]],
      },
    });

    return NextResponse.json(response.data, {
      status: 201,
      headers: {
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json("An error occured in the client", { status: 500 });
  }
}
