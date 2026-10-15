"use client";

import { useEffect, useRef, useState } from "react";

import { verifyToken } from "@/services/brotoApi";
import { readAuthLink } from "@/utils/authLink";

export type ConfirmPhase = "checking" | "ok" | "bad" | "offline";

const DONE_KEY = "broto.confirmed";

function remembered() {
  try {
    return sessionStorage.getItem(DONE_KEY) === "1";
  } catch {
    return false;
  }
}

function remember() {
  try {
    sessionStorage.setItem(DONE_KEY, "1");
  } catch {
    return;
  }
}

async function resolvePhase(): Promise<ConfirmPhase> {
  const { token, type, error } = readAuthLink();

  if (!token) return remembered() ? "ok" : "bad";
  if (error) return "bad";

  try {
    await verifyToken(token, type === "recovery" ? "recovery" : "email");
    remember();
    return "ok";
  } catch (failure) {
    const code = failure instanceof Error ? failure.message : "";
    return code === "sem_conexao" ? "offline" : "bad";
  }
}

export function useConfirm() {
  const [phase, setPhase] = useState<ConfirmPhase>("checking");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    resolvePhase().then(setPhase);
  }, []);

  return phase;
}
