const LINE_URL = "https://page.line.me/623zesxf";
const FACEBOOK_URL = "https://www.facebook.com/TheCubicFitness";
const INSTAGRAM_URL = "https://www.instagram.com/cubicsocialclub";
const CTA = "ทักไลน์เลย";

const loop = [
  { n: "01", title: "Measure", th: "วัด", text: "ประเมินร่างกายด้วยข้อมูลจริง" },
  { n: "02", title: "Design", th: "ออกแบบ", text: "วางโปรแกรมเฉพาะตัวคุณ" },
  { n: "03", title: "Treat", th: "ดูแล", text: "ลงมือทำโดยทีมแพทย์และโค้ช" },
  { n: "04", title: "Re-test", th: "ตรวจซ้ำ", text: "วัดผลอีกครั้งให้เห็นความเปลี่ยนแปลง" },
];

const levels = [
  {
    level: "Level 1",
    name: "Quick Scan",
    items: ["วัดองค์ประกอบร่างกาย (InBody)", "แรงบีบมือ (Grip strength)", "ความแปรปรวนของหัวใจ (HRV)"],
  },
  {
    level: "Level 2",
    name: "Longevity Panel",
    items: ["ตรวจเลือด: เมตาบอลิก ไขมัน ฮอร์โมน ไทรอยด์ การอักเสบ", "ทดสอบ VO2max", "DEXA scan"],
  },
  {
    level: "Level 3",
    name: "Performance",
    items: ["Lactate threshold", "CGM ติดตามน้ำตาลต่อเนื่อง", "ติดตามการฟื้นตัวด้วย wearables"],
  },
];

const programs = [
  { name: "Weight Management", text: "องค์ประกอบร่างกาย ตรวจเมตาบอลิก และ CGM" },
  { name: "Race Prep", text: "VO2max, lactate threshold และการฟื้นตัว" },
  { name: "HYROX Optimization", text: "พละกำลัง ความอึด และการฟื้นตัวสำหรับสายแข่ง" },
];

const therapies = [
  "Hormone Optimization",
  "Peptide Therapies",
  "Hyperbaric Oxygen Therapy",
  "Red Light Therapy",
  "Cryo & Contrast Therapy",
  "IV Drip Lounge",
  "Physiotherapy",
  "Mind & Stress: Mindfulness, Pulsetto",
];

const faqs = [
  {
    q: "ไม่เคยออกกำลังกายมาก่อน เริ่มได้ไหม",
    a: "เริ่มได้ครับ/ค่ะ เราเริ่มจากการวัดผลและออกแบบโปรแกรมให้ตรงกับระดับของคุณ",
  },
  {
    q: "เริ่มต้นกับ CUBIC Longevity ต้องทำอะไร",
    a: "เริ่มที่ Quick Scan (Level 1) ใช้เวลาไม่นาน แล้วทีมงานจะแนะนำขั้นต่อไปตามผลที่ได้",
  },
  {
    q: "มีบริการทางการแพทย์ไหม",
    a: "มี โดยดูแลผ่านแพทย์เวชศาสตร์ชะลอวัย ภายใต้หลักการที่อิงหลักฐานทางวิทยาศาสตร์ ทักไลน์เพื่อสอบถามบริการที่เปิดให้บริการล่าสุด",
  },
  {
    q: "ราคาและแพ็กเกจเป็นอย่างไร",
    a: "ทักไลน์เพื่อสอบถามราคาล่าสุดและโปรโมชันสำหรับลูกค้าใหม่ได้เลย",
  },
];

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-sm bg-line-green px-8 py-4 text-lg font-semibold text-white transition hover:brightness-95 ${className}`}
    >
      {CTA}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <section className="glow px-5 py-24 text-center sm:py-36">
        <div className="mx-auto max-w-3xl">
          <p className="label mb-6">CUBIC · Longevity</p>
          <h1 className="text-h1 font-bold leading-tight sm:text-6xl">
            High Performance
            <br />
            Healthspan
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted">
            เพิ่มปีที่แข็งแรง ไม่ใช่แค่เพิ่มอายุ โปรแกรมสุขภาพยืนยาวที่เริ่มจากข้อมูลของร่างกายคุณ
            ดูแลโดยแพทย์เวชศาสตร์ชะลอวัยและทีมโค้ช
          </p>
          <LineButton className="mt-10" />
          <p className="mt-6 text-small tracking-widest text-muted">MOVE. CONNECT. RECOVER.</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 py-20">
        <p className="label mb-3 text-center">The CUBIC Longevity Loop</p>
        <h2 className="mb-12 text-center text-h2 font-bold">วัด ออกแบบ ดูแล แล้วตรวจซ้ำ</h2>
        <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-4">
          {loop.map((s) => (
            <div key={s.n} className="bg-surface p-6">
              <div className="text-small text-primary">{s.n}</div>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <div className="text-small text-primary-soft">{s.th}</div>
              <p className="mt-3 text-small text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-light px-5 py-20 text-ink">
        <div className="mx-auto max-w-5xl">
          <p className="label mb-3 text-center">Assessment</p>
          <h2 className="mb-12 text-center text-h2 font-bold">เริ่มจากรู้จักร่างกายของคุณ 3 ระดับ</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {levels.map((l) => (
              <div key={l.level} className="border-t-2 border-ink pt-5">
                <div className="text-small text-ink/60">{l.level}</div>
                <h3 className="mt-1 text-xl font-semibold">{l.name}</h3>
                <ul className="mt-4 space-y-2 text-small text-ink/80">
                  {l.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 py-20">
        <p className="label mb-3 text-center">Programs</p>
        <h2 className="mb-12 text-center text-h2 font-bold">โปรแกรมตามเป้าหมาย</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {programs.map((p) => (
            <div key={p.name} className="rounded-sm border border-line bg-surface p-6">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-3 text-small text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-label uppercase tracking-[0.28em] text-cool">Medical &amp; Recovery</p>
          <h2 className="text-h2 font-bold">การรักษาและการฟื้นตัว</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            เปลี่ยนวิธีดูแล แต่บรรยากาศสงบเหมือนเดิม
          </p>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {therapies.map((t) => (
              <li key={t} className="rounded-sm border border-line px-4 py-2 text-small">
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-small text-muted">
            บริการแต่ละอย่างทยอยเปิดตามแผนงาน ทักไลน์เพื่อสอบถามบริการที่พร้อมให้บริการ
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 py-20">
        <p className="label mb-3 text-center">Medical Director</p>
        <h2 className="mb-2 text-center text-h2 font-bold">PATTARA WIRIYABANDITKUL, M.D.</h2>
        <p className="mb-10 text-center text-muted">Medical Director · CUBIC Longevity</p>
        <h3 className="mb-6 text-center text-xl font-semibold">คำถามที่พบบ่อย</h3>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-sm border border-line bg-surface px-5 py-4">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-3 text-small text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="glow px-5 py-24 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="text-h2 font-bold">เริ่มจาก Quick Scan</h2>
          <p className="mt-3 text-muted">ทักมาคุยกับทีมงาน แล้วเราจะช่วยวางแผนให้คุณ</p>
          <LineButton className="mt-8" />
          <div className="mt-8 flex justify-center gap-6 text-small text-muted">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="underline">
              Facebook
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline">
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 py-6 text-center text-small text-muted">© 2026 CUBIC Longevity</footer>
    </main>
  );
}
