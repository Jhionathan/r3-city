// lib/auth.ts
export async function getWinToken(apiLogin: string, apiPassword: string): Promise<string | null> {
  if (!apiLogin || !apiPassword) {
    console.error('❌ Credenciais inválidas - API_USERNAME ou API_PASSWORD não definidos');
    return null;
  }

  try {
    const urlApi = process.env.API_LOGIN_URL;
    if (!urlApi) {
      console.error('❌ API_LOGIN_URL não configurada');
      return null;
    }

    console.log('🔑 Fazendo login na API externa...');
    console.log('📍 URL:', urlApi);
    console.log('👤 Login:', apiLogin);

    const response = await fetch(urlApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login: apiLogin, senha: apiPassword }),
    });

    console.log('📡 Status da resposta de login:', response.status);

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error("❌ Erro ao fazer login:", response.status, error);
      return null;
    }

    const data = await response.json();
    console.log('✅ Login realizado com sucesso');
    console.log('🎫 Token recebido:', data.accessToken ? 'SIM' : 'NÃO');
    
    return data.accessToken ?? null;  
  } catch (err) {
    console.error("❌ Erro no login:", err);
    return null;
  }
}