import { API_URL } from "@/constants/api";

type Session = { access_token?: string };

async function call<Result>(path: string, init: RequestInit): Promise<Result> {
  let response: Response;

  try {
    response = await fetch(API_URL + path, init);
  } catch {
    throw new Error("sem_conexao");
  }

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(body.erro || "request_failed");
  }

  return body as Result;
}

export function verifyToken(token: string, type: string) {
  return call<Session>("/v1/auth/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token_hash: token, type }),
  });
}

export function setPassword(accessToken: string, password: string) {
  return call<Session>("/v1/auth/password", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });
}
