const LINE_URL = "https://page.line.me/623zesxf";
const FACEBOOK_URL = "https://www.facebook.com/TheCubicFitness";
const INSTAGRAM_URL = "https://www.instagram.com/cubicsocialclub";
const CTA = "ทักไลน์เลย";

const highlights = [
  {
    icon: "◆",
    title: "ประเมินสุขภาพเป็นรายบุคคล",
    text: "เริ่มจากทำความรู้จักร่างกายและเป้าหมายของคุณ เพื่อวางแผนที่เหมาะกับตัวคุณจริง ๆ",
  },
  {
    icon: "●",
    title: "ผู้ฝึกสอนดูแลใกล้ชิด",
    text: "โค้ชคอยแนะนำท่าที่ถูกต้องและปรับความหนักให้พอดี ปลอดภัย ไม่หักโหม",
  },
  {
    icon: "■",
    title: "บรรยากาศสบาย เป็นกันเอง",
    text: "คลับที่ออกกำลังกายสนุก มีเพื่อนร่วมทาง มาแล้วอยากกลับมาอีก",
  },
];

const services = [
  {
    name: "ประเมินครั้งแรก",
    desc: "พูดคุย ตรวจความพร้อมของร่างกาย และตั้งเป้าหมายสำหรับลูกค้าใหม่",
  },
  {
    name: "คลาสออกกำลังกาย",
    desc: "SPIN BASICS, BUILD & BURN และ THE BEAST เลือกได้ตามระดับความเข้มข้นที่ชอบ",
  },
  {
    name: "โปรแกรม Longevity",
    desc: "แผนระยะยาวเพื่อสุขภาพแข็งแรง ฟื้นตัวดี และมีพลังในทุกวัน",
  },
];

const faqs = [
  {
    q: "ไม่เคยออกกำลังกายมาก่อน เริ่มได้ไหม",
    a: "เริ่มได้เลยครับ/ค่ะ ทีมโค้ชจะปรับระดับให้เหมาะกับคุณ ไม่ต้องกังวลว่าจะตามคนอื่นไม่ทัน",
  },
  {
    q: "ลูกค้าใหม่ต้องเตรียมอะไรบ้าง",
    a: "สวมชุดออกกำลังกายที่สบาย และนำน้ำดื่มมาด้วย ส่วนอุปกรณ์อื่นทางคลับเตรียมไว้ให้",
  },
  {
    q: "ราคาและแพ็กเกจเป็นอย่างไร",
    a: "แพ็กเกจมีหลายแบบให้เลือก ทักไลน์เพื่อสอบถามราคาล่าสุดและโปรโมชันสำหรับลูกค้าใหม่ได้เลย",
  },
  {
    q: "จองคิวอย่างไร",
    a: "กดปุ่มทักไลน์ แล้วบอกวันเวลาที่สะดวก ทีมงานจะยืนยันคิวให้ภายในวันเดียวกัน",
  },
];

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-line-green px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:brightness-95 ${className}`}
    >
      {CTA}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <section className="bg-dark px-5 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 tracking-[0.3em] text-accent-soft">CUBIC LONGEVITY</p>
          <h1 className="text-h1 font-bold leading-tight sm:text-5xl">
            แข็งแรงวันนี้ เพื่อใช้ชีวิตได้ยาวนานในวันข้างหน้า
          </h1>
          <p className="mt-6 text-lg text-accent-soft">
            โปรแกรมสุขภาพและการออกกำลังกายสำหรับลูกค้าใหม่ จากคลับสมรรถนะสูงใจกลางกรุงเทพฯ
          </p>
          <LineButton className="mt-10" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <h2 className="mb-10 text-center text-h2 font-bold">ทำไมต้อง CUBIC</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-line bg-surface p-6">
              <div className="mb-3 text-2xl text-primary">{h.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{h.title}</h3>
              <p className="text-small text-muted">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent-soft px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-h2 font-bold">บริการของเรา</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="rounded-2xl bg-surface p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-primary-dark">{s.name}</h3>
                <p className="text-small text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-muted">
            สอบถามราคาและโปรโมชันสำหรับลูกค้าใหม่ได้ทางไลน์
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 py-16">
        <h2 className="mb-8 text-center text-h2 font-bold">คำถามที่พบบ่อย</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="rounded-xl border border-line bg-surface px-5 py-4"
            >
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-3 text-small text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-dark px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-xl">
          <h2 className="text-h2 font-bold">พร้อมเริ่มแล้วใช่ไหม</h2>
          <p className="mt-3 text-accent-soft">ทักมาคุยกับทีมงาน แล้วเราจะช่วยวางแผนให้คุณ</p>
          <LineButton className="mt-8" />
          <div className="mt-8 flex justify-center gap-6 text-accent-soft">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="underline">
              Facebook
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline">
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 py-6 text-center text-small text-muted">
        © 2026 CUBIC Longevity
      </footer>
    </main>
  );
}
