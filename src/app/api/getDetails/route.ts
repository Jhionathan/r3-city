import { cookies } from "next/headers";

interface LoginResponse {
  accessToken: string;
  refreshToken?: string;
  expiresIn?: number;
}

export async function getWinToken(apiLogin: string, apiPassword: string): Promise<string | null> {
  if (!apiLogin || !apiPassword) {
    console.error('Credenciais de login não fornecidas');
    return null;
  }

  const urlApi = process.env.API_LOGIN_URL;
  if (!urlApi) {
    console.error('URL da API não configurada');
    return null;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); 

    const response = await fetch(urlApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login: apiLogin, senha: apiPassword }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Erro desconhecido' }));
      console.error('Falha na autenticação:', response.status);
      throw new Error(`Erro ${response.status}: ${error.message || 'Falha na autenticação'}`);
    }

    const data: LoginResponse = await response.json();
    
    if (!data.accessToken) {
      throw new Error('Token não recebido da API');
    }

    const cookieStore = await cookies();
    cookieStore.set('tokenWin', data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: data.expiresIn || 3600, 
      path: '/',
    });

    console.log('Login realizado com sucesso');
    return data.accessToken;

  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('Timeout na requisição de login');
      } else {
        console.error('Erro no processo de login:', error.message);
      }
    }
    return null;
  }
}