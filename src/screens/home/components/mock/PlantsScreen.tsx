"use client";

import { useState } from "react";

import { Bell, Check, ChevronRight, Drop, Sprout } from "@/components/Icons";

const DOTS = ["dot-today", "dot-soon", "dot-far", "dot-far"];

type Labels = {
  title: string;
  count: string;
  bell: string;
  tabs: string[];
  summaryTitle: string;
  summaryDetail: string;
  sectionTitle: string;
  items: { name: string; when: string }[];
  tasksMonth: string;
  days: { weekday: string; number: string }[];
  groups: { name: string; place: string; tasks: string[] }[];
  analysesNote: string;
  analyses: { species: string; health: string; when: string }[];
};

export function PlantsScreen({ labels }: { labels: Labels }) {
  const [tab, setTab] = useState(0);
  const [day, setDay] = useState(0);
  const [done, setDone] = useState<string[]>([]);

  const toggle = (key: string) =>
    setDone((list) =>
      list.includes(key) ? list.filter((item) => item !== key) : [...list, key],
    );

  return (
    <div className="phone-screen is-live">
      <div className="pl">
        <div className="pl-top">
          <div className="pl-title-group">
            <p className="pl-title">{labels.title}</p>
            <p className="pl-count">{labels.count}</p>
          </div>

          <span className="pl-bell" aria-label={labels.bell}>
            <Bell />
          </span>
        </div>

        <div className="pl-tabs" role="tablist">
          {labels.tabs.map((label, i) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={i === tab}
              className={i === tab ? "is-on" : undefined}
              onClick={() => setTab(i)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="pl-body">
          {tab === 0 ? (
            <>
              <div className="pl-summary">
                <span className="pl-summary-icon">
                  <Drop />
                </span>
                <div className="pl-summary-texts">
                  <p className="pl-summary-title">{labels.summaryTitle}</p>
                  <p className="pl-summary-detail">{labels.summaryDetail}</p>
                </div>
                <span className="pl-summary-go">
                  <ChevronRight />
                </span>
              </div>

              <p className="pl-section">{labels.sectionTitle}</p>

              <div className="pl-list">
                {labels.items.map((item, i) => (
                  <div key={item.name} className="pl-card">
                    <span className="pl-thumb">
                      <Sprout />
                    </span>
                    <div className="pl-texts">
                      <p className="pl-name">{item.name}</p>
                      <p className="pl-meta">
                        <i className={DOTS[i]} />
                        <span>{item.when}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : null}

          {tab === 1 ? (
            <>
              <p className="pl-month">{labels.tasksMonth}</p>

              <div className="pl-days">
                {labels.days.map((item, i) => (
                  <button
                    key={item.number}
                    type="button"
                    className={i === day ? "pl-day is-on" : "pl-day"}
                    aria-pressed={i === day}
                    onClick={() => setDay(i)}
                  >
                    <span className="pl-weekday">{item.weekday}</span>
                    <span className="pl-number">{item.number}</span>
                    <i />
                  </button>
                ))}
              </div>

              <div className="pl-list">
                {labels.groups.map((group) => (
                  <div key={group.name} className="pl-group">
                    <div className="pl-group-head">
                      <span className="pl-thumb is-small">
                        <Sprout />
                      </span>
                      <div className="pl-texts">
                        <p className="pl-group-name">{group.name}</p>
                        <p className="pl-group-place">{group.place}</p>
                      </div>
                    </div>

                    {group.tasks.map((task) => {
                      const key = group.name + task;
                      const feito = done.includes(key);

                      return (
                        <div key={task} className="pl-task">
                          <span
                            className={feito ? "pl-task-icon is-done" : "pl-task-icon"}
                          >
                            <Drop />
                          </span>

                          <p
                            className={feito ? "pl-task-name is-done" : "pl-task-name"}
                          >
                            {task}
                          </p>

                          <button
                            type="button"
                            className={feito ? "pl-check is-on" : "pl-check"}
                            aria-pressed={feito}
                            aria-label={task}
                            onClick={() => toggle(key)}
                          >
                            <Check strokeWidth="3" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </>
          ) : null}

          {tab === 2 ? (
            <>
              <p className="pl-note">{labels.analysesNote}</p>

              <div className="pl-list">
                {labels.analyses.map((item) => (
                  <div key={item.species} className="pl-card">
                    <span className="pl-thumb">
                      <Sprout />
                    </span>
                    <div className="pl-texts">
                      <p className="pl-name">{item.species}</p>
                      <p className="pl-meta">
                        <span className="pl-pill">{item.health}</span>
                        <span>{item.when}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
