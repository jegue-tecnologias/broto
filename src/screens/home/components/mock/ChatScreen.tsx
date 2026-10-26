"use client";

import { useState } from "react";

import { Back, Camera, Clip, Close, Dots, Mic } from "@/components/Icons";

import { ChatFace } from "./Brotinho";
import { SysIcons } from "./SysIcons";

type Labels = {
  time: string;
  back: string;
  menu: string;
  header: string;
  subtitle: string;
  greeting: string;
  ask: string;
  answer: string;
  ask2: string;
  answer2: string;
  field: string;
  listening: string;
  gallery: string;
  camera: string;
  mic: string;
  cancel: string;
};

export function ChatScreen({ labels }: { labels: Labels }) {
  const [ouvindo, setOuvindo] = useState(false);

  return (
    <div className="phone is-small">
      <div className="phone-screen is-live is-still">
        <div className="chat">
          <div className="chat-sys">
            <span className="chat-sys-time">{labels.time}</span>
            <SysIcons />
          </div>

          <div className="chat-head">
            <span className="chat-circle" aria-label={labels.back}>
              <Back />
            </span>

            <div className="chat-ident">
              <span className="chat-face is-head">
                <ChatFace />
              </span>
              <div className="chat-ident-texts">
                <p className="chat-name">{labels.header}</p>
                <p className="chat-sub">{labels.subtitle}</p>
              </div>
            </div>

            <span className="chat-circle" aria-label={labels.menu}>
              <Dots />
            </span>
          </div>

          <div className="chat-list">
            <div className="chat-row chat-bot">
              <span className="chat-face">
                <ChatFace />
              </span>
              <p className="bubble bubble-bot">{labels.greeting}</p>
            </div>

            <div className="chat-row">
              <p className="bubble bubble-user">{labels.ask}</p>
            </div>

            <div className="chat-row chat-bot">
              <span className="chat-face">
                <ChatFace />
              </span>
              <p className="bubble bubble-bot">{labels.answer}</p>
            </div>

            <div className="chat-row">
              <p className="bubble bubble-user">{labels.ask2}</p>
            </div>

            <div className="chat-row chat-bot">
              <span className="chat-face">
                <ChatFace />
              </span>
              <p className="bubble bubble-bot">{labels.answer2}</p>
            </div>
          </div>

          <div className="chat-composer">
            <div className={ouvindo ? "chat-pill is-listening" : "chat-pill"}>
              {ouvindo ? (
                <>
                  <span className="chat-wave" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((bar) => (
                      <i key={bar} style={{ ["--i" as string]: bar }} />
                    ))}
                  </span>
                  <p className="chat-field">
                    {labels.listening}
                  </p>
                  <button
                    type="button"
                    className="chat-tool is-clay"
                    aria-label={labels.cancel}
                    onClick={() => setOuvindo(false)}
                  >
                    <Close />
                  </button>
                </>
              ) : (
                <>
                  <p className="chat-field">{labels.field}</p>
                  <span className="chat-tool" aria-label={labels.gallery}>
                    <Clip />
                  </span>
                  <span className="chat-tool" aria-label={labels.camera}>
                    <Camera />
                  </span>
                </>
              )}
            </div>

            <button
              type="button"
              className={ouvindo ? "chat-send is-stop" : "chat-send"}
              aria-label={labels.mic}
              aria-pressed={ouvindo}
              onClick={() => setOuvindo((on) => !on)}
            >
              <Mic />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
