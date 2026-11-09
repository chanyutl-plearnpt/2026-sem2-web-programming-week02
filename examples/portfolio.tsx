// หน้า 18: คัดลอกทั้งไฟล์นี้ไปแทน src/App.tsx หลังเก็บโค้ดที่ลองไว้ใน practice/App.tsx
import { profile, projects } from './data'

// ===== คาบเดี่ยว: ทดลองใน Console (เปิดหน้าเว็บ กด F12 แล้วเลือกแท็บ Console) =====
console.log('ชื่อ:', profile.name)
console.log('ชื่อผลงานทั้งหมด:', projects.map((p) => p.title))
// TODO A1: ทำนายก่อนรันว่า projects.map((p) => p.year) จะได้อะไร แล้วพิมพ์ console.log ของมันเพิ่มด้านล่างนี้
// TODO A2: ลองเปลี่ยน p.title เป็น p.tags แล้วดูผล

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>{profile.name}</h1>
      <p>{profile.role}</p>
      <h2>ผลงานของฉัน</h2>
      <ul>
        {/* TODO B2: ใช้ projects.map((p) => ...) สร้าง <li> ให้ผลงานทุกชิ้น
            รูปแบบ: {p.title} ({p.year}) และอย่าลืม key={p.title} */}
      </ul>
    </div>
  )
}
