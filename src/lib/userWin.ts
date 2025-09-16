export async function getWinToken(apiLogin: string, apiPassword: string): Promise<string | null> {
  if (!apiLogin || !apiPassword) {
    console.error('Credenciais inválidas');
    return null;
  }

  try {
    const urlApi = process.env.API_LOGIN_URL;
    if (!urlApi) {
      console.error('URL da API não configurada');
      return null;
    }

    const response = await fetch(urlApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login: apiLogin, senha: apiPassword }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error("Erro ao fazer login:", error);
      return null;
    }

    const data = await response.json();
    return data.accessToken ?? null;  
  } catch (err) {
    console.error("Erro no login:", err);
    return null;
  }
}