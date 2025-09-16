
'use server'

import { getOracleConnection } from "@/lib/oracle";
import oracledb from 'oracledb';

export async function getProductDetailsAction(codprod: string): Promise<string | null> {
  let connection;
  
  try {
    console.log("Estabelecendo conexão Oracle...");
    const { connection: oracleConnection } = await getOracleConnection();
    connection = oracleConnection;
    
    const result = await connection.execute(
      `SELECT p.DADOSTECNICOS FROM PCPRODUT p WHERE P.CODPROD = :codprod`,
      [parseInt(codprod)],
      {
        fetchInfo: {
          "DADOSTECNICOS": { type: oracledb.STRING }
        }
      }
    );

    if (!result.rows || result.rows.length === 0) {
      return null;
    }

    const row = result.rows[0] as unknown[];
    console.log(row);
    
    return row[0] as string;
  } catch (err) {
    console.error("Erro Oracle:", err);
    return null;
  } finally {
    if (connection) await connection.close();
  }
}