// หน้า 18: คัดลอกทั้งไฟล์นี้ไปแทน src/App.tsx หลังเก็บโค้ดที่ลองไว้ใน practice/App.tsx
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { profile, projects } from './data'

// ===== คาบเดี่ยว: ทดลองใน Console (เปิดหน้าเว็บ กด F12 แล้วเลือกแท็บ Console) =====
console.log('ชื่อ:', profile.name)
console.log('ชื่อผลงานทั้งหมด:', projects.map((p) => p.title))
// TODO A1: ทำนายก่อนรันว่า projects.map((p) => p.year) จะได้อะไร แล้วพิมพ์ console.log ของมันเพิ่มด้านล่างนี้
// TODO A2: ลองเปลี่ยน p.title เป็น p.tags แล้วดูผล

export default function App() {
  return (
    <Stack spacing={1} sx={{ p: 3 }}>
      <Typography variant="h4">{profile.name}</Typography>
      <Typography color="text.secondary">{profile.role}</Typography>
      <Typography variant="h6">ผลงานของฉัน</Typography>
      {/* TODO B2 ขั้น 1: เขียน <Typography> สามบรรทัด ใช้ projects[0], projects[1] และ projects[2]
          รูปแบบ: {projects[0].title} ({projects[0].year}) แล้ว Save
          TODO B2 ขั้น 2: ลบสามบรรทัดนั้น แล้วใช้ projects.map((p) => <Typography key={p.title}>...</Typography>)
          ผลต้องเหมือนขั้น 1 จากนั้นลองเพิ่ม project ที่ 4 ใน data.ts */}

      {/* ===== ฝึกเพิ่ม (คาบคู่ 45–57 นาที) ใช้ข้อมูลจาก data.ts ทำทีละข้อ ไล่จากง่ายไปยาก ===== */}

      {/* ชุด C: ใช้ component จาก Week 1 กับข้อมูลและตัวแปร (import Button, Chip เพิ่มด้านบนเหมือน Week 1)
          C1: แสดง profile.tagline ด้วย <Typography>
          C2: ประกาศ const skill = profile.skills[0] เหนือ return แล้วแสดง <Chip label={skill.name} />
          C3: ใส่ Stack direction="row" spacing={1} ครอบ <Chip> สามใบจาก profile.tools[0], [1], [2]
              แล้วเพิ่ม <Button variant="contained"> ที่ label เป็น projects[2].title */}

      {/* ชุด D: ใช้ map แปลงสมาชิก array เป็น component (ใส่ key ทุกครั้ง)
          D1: แทน Chip สามใบของ C3 ด้วย profile.tools.map((tool) => <Chip key={tool} label={tool} />)
          D2: profile.skills.map แล้วคืน <Chip> ที่ label เป็น `${s.name} ${s.level}%` (template string)
          D3: projects.map คืน Stack ที่มี Typography ชื่อ, Typography คำอธิบาย
              และ Stack direction="row" ที่ p.tags.map คืน <Chip> */}
    </Stack>
  )
}
