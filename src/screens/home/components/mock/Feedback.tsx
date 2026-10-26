"use client";

import { useState } from "react";

import { ThumbDown, ThumbUp } from "@/components/Icons";

type FeedbackProps = {
  title: string;
  hint: string;
  yes: string;
  no: string;
};

export function Feedback({ title, hint, yes, no }: FeedbackProps) {
  const [answer, setAnswer] = useState<boolean | null>(null);

  const card = answer === null ? "scr-feedback" : "scr-feedback is-answered";

  return (
    <div className={card}>
      <p className="scr-feedback-title">{title}</p>
      <p className="scr-hint-text">{hint}</p>

      <div className="scr-thumbs">
        <button
          type="button"
          className={answer === true ? "scr-thumb is-yes is-on" : "scr-thumb is-yes"}
          aria-pressed={answer === true}
          onClick={() => setAnswer(true)}
        >
          <ThumbUp />
          {yes}
        </button>

        <button
          type="button"
          className={answer === false ? "scr-thumb is-no is-on" : "scr-thumb is-no"}
          aria-pressed={answer === false}
          onClick={() => setAnswer(false)}
        >
          <ThumbDown />
          {no}
        </button>
      </div>
    </div>
  );
}
