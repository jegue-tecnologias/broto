import { Check } from "@/components/Icons";
import { list, type T } from "@/i18n";

export function Proof({ t }: { t: T }) {
  return (
    <section className="proof">
      <div className="wrap">
        <ul className="proof-list">
          {list<string>(t, "proof.items").map((item, i) => (
            <li key={item} style={{ ["--i" as string]: i }}>
              <Check strokeWidth="3" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
