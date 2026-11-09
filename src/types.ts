// "หน้าตาของข้อมูล" ที่ทั้งเว็บใช้ร่วมกัน (ไฟล์ของครู ไม่ต้องแก้)
// ถ้าเพิ่ม field ใหม่ในข้อมูล ต้องเพิ่มที่ type นี้ก่อน

export type Skill = {
  name: string
  level: number // 0–100
}

export type Project = {
  title: string
  description: string
  tags: string[]
  year: number
  link?: string // ลิงก์เว็บของผลงาน (ไม่บังคับ — เครื่องหมาย ? แปลว่าจะมีหรือไม่มีก็ได้)
}

export type Profile = {
  name: string
  nickname: string
  role: string
  tagline: string
  about: string
  email: string
  skills: Skill[]
  tools: string[]
}
