// ===== ไฟล์ส่วนตัวของนักเรียน =====
// แก้ข้อมูลในไฟล์นี้เป็นของตัวเอง (ข้อมูลตัวอย่างอยู่ด้านล่าง)
// ผลงานนี้จะถูกเผยแพร่ออนไลน์ อย่าใส่ข้อมูลที่ไม่อยากให้คนทั่วไปเห็น เช่น เบอร์โทร ที่อยู่

import type { Profile, Project } from './types'

export const profile: Profile = {
  name: 'ภูมิ ใจดี',
  nickname: 'ภูมิ',
  role: 'นักเรียน ม.5 · Frontend learner',
  tagline: 'ชอบสร้างเว็บและเล่นกับข้อมูล',
  about:
    'ฉันกำลังเรียนรู้การสร้างเว็บด้วย React และ TypeScript สนใจการนำข้อมูลมาแสดงเป็นกราฟ และอยากสร้างเว็บที่คนอื่นใช้งานได้จริง',
  email: 'phoom@example.com',
  skills: [
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 75 },
    { name: 'React', level: 60 },
  ],
  tools: ['TypeScript', 'MUI', 'Tailwind', 'Vite', 'Git', 'GitHub'],
}

export const projects: Project[] = [
  {
    title: 'Portfolio',
    description: 'เว็บแนะนำตัวที่ประกอบจาก component ของ MUI',
    tags: ['React', 'MUI'],
    year: 2026,
  },
  {
    title: 'Pokémon Stats Dashboard',
    description: 'แดชบอร์ดวิเคราะห์ stat ของ Pokémon Gen 1–3 ด้วย chart หลายแบบ',
    tags: ['shadcn/ui', 'Recharts'],
    year: 2026,
  },
  {
    title: 'PlearnFlix',
    description: 'เว็บดู trailer พร้อมรายการโปรดที่จำค่าไว้ในเบราว์เซอร์',
    tags: ['React', 'localStorage'],
    year: 2026,
  },
]
