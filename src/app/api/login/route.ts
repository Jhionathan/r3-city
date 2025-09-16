import { getWinToken } from "../../../lib/userWin";

export async function POST() {
  const apiLogin = process.env.API_LOGIN as string;
  const apiPassword = process.env.API_PASSWORD as string;

  const token = await getWinToken(apiLogin, apiPassword);

  if (!token) {
    return Response.json({ error: "Falha ao obter token" }, { status: 401 });
  }

  const response = Response.json({ token });

  response.headers.append(
    "Set-Cookie",
    `tokenWin=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict; ${
      process.env.NODE_ENV === "production" ? "Secure;" : ""
    }`
  );

  return response;
}