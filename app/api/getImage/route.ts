import {NextResponse} from "next/server";

export const dynamic = "force-dynamic";

const NPS_API_KEY = process.env.NPS_API_KEY;

const base_url = "https://developer.nps.gov/api/v1/";
const image_url = base_url + "multimedia/galleries/assets?";

export async function GET(request:Request): Promise<NextResponse> {
    const {searchParams} = new URL(request.url);
    const limit = searchParams.get("limit");
    const start = searchParams.get("start");
    const query = searchParams.get("query");

    let temp_url = image_url;
    if (limit) {
        temp_url += "limit=" + limit + "&";
    }
    if (start) {
        temp_url += "start=" + start + "&";
    }
    if (query) {
        temp_url += "q" + query + "&";
    }
    temp_url += "api_key=" + NPS_API_KEY;

    const res = await fetch(temp_url);
    const data = await res.json();

    return NextResponse.json(data);
}