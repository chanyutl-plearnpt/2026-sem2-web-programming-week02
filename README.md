# สัปดาห์ 2 — JS ที่จำเป็น + Data model แรก (P1 Portfolio)

## เริ่มต้น (Start routine ~8 นาทีแรกของคาบเดี่ยว)

1. เปิด [repo สัปดาห์ 2](https://github.com/chanyutl-plearnpt/2026-sem2-web-programming-week02) แล้วกด **Fork** (ใช้ชื่อเดิมได้เลย) ได้ repo ของคุณเองใน GitHub
2. ใน GitHub Desktop เลือก **File → Clone repository → URL** ใส่ URL ของ fork ตั้ง Local path ให้ลงเป็น `web-prog-2026/w02` ข้าง `w01` แล้ว Clone ตรวจ Current repository และ branch `starter` ตั้งชื่อ/noreply email ราย repo ต่อจาก Week 1
3. เปิด Terminal ในโฟลเดอร์ `w02` แล้วรัน

   ```
   npm install
   npm run dev
   ```

   ระหว่างรอ install ตอบคำถามทบทวนกับครู จากนั้นเปิด URL ที่ Terminal แสดง (ปกติ `http://localhost:5173` แต่อาจเป็นพอร์ตอื่นหากมีเว็บเก่าเปิดอยู่)

> สัปดาห์นี้ยังไม่มีไฟล์ส่วนตัวให้นำมาจากสัปดาห์ก่อน (`npm run carry` ยังไม่ต้องใช้)

## ไฟล์ในโฟลเดอร์นี้

| ไฟล์ | เป็นของใคร | ทำอะไร |
|---|---|---|
| `src/types.ts` | ครู (อ่านอย่างเดียว) | บอก "หน้าตาของข้อมูล" เช่น `Project` มี field อะไรบ้าง |
| `src/data.ts` | **ของคุณ** (ไฟล์ส่วนตัว) | ข้อมูลของคุณ ตอนนี้เป็นข้อมูลตัวอย่าง ให้แก้เป็นของตัวเอง |
| `src/App.tsx` | แก้ตามครู | เริ่มจาก App ขั้นต่ำเพื่อลอง primitive → object → array |
| `examples/portfolio.tsx` | ครูเตรียมให้ | หน้า 18 คัดลอกไปแทน src/App.tsx เพื่อเริ่ม import/export, A1–A2 และ B2 |
| `practice/App.tsx` | สร้างในคาบ | เก็บโค้ดที่ลองก่อนเปลี่ยนไปใช้ portfolio (อยู่นอก src) |

> project จะเผยแพร่ออนไลน์ อย่าใส่เบอร์โทรหรือที่อยู่จริงใน `data.ts`

## งานวันนี้

เริ่มจากข้อมูล 3 ระดับ: ค่าเดี่ยวแบบ primitive (`string`, `number`, `boolean`) → object ของสิ่งหนึ่ง → array ของหลายรายการ จากนั้นเรียนฟังก์ชันรับค่าแล้วคืนผล ก่อนส่งฟังก์ชันให้ `.map()` เรียกกับแต่ละรายการ (callback) array เก็บค่าเดี่ยวได้โดยตรง เช่น คะแนนหลายค่า หรือเก็บ object ของคนหลายคนที่มีรูปแบบเดียวกันก็ได้

ดู `TASKS.md`

## จบคาบ

Save → รัน `npm run check` ให้ผ่าน → GitHub Desktop ตรวจ repository `w02` และ branch `starter` → Changes ดู diff → Commit พร้อมสรุปสิ่งที่ทำ → Push origin → เปิด fork ตรวจ commit ล่าสุด

หากใช้ Git ผ่าน Terminal เป็นอยู่แล้ว สามารถใช้ `git add .`, `git commit` และ `git push` แทนได้

งานจะอยู่ใน fork ของคุณบน GitHub (ทำงานบน branch `starter` ได้เลย ไม่ต้องสร้าง branch ใหม่) หลังจบคาบ ครูจะ push branch `final` (เฉลย) ไว้ใน repo ของครู เปิดดูเทียบกับ `starter` ได้
