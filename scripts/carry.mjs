// คัดลอก "ไฟล์ส่วนตัว" จากโฟลเดอร์สัปดาห์ก่อน มาใส่ใน starter ของสัปดาห์นี้
// วิธีใช้ (ในโฟลเดอร์ของสัปดาห์ใหม่):  npm run carry -- ../w03
// รันซ้ำ: ถ้าไฟล์ปลายทางถูกแก้ไว้แล้ว (ต่างจากทั้งไฟล์ตัวอย่างและไฟล์ต้นทาง) จะไม่ทับ ใช้ --force เพื่อทับ
// ถ้าไฟล์ที่นำมาใส่ทำให้ `npm run check` ไม่ผ่าน จะย้อนกลับไปใช้ไฟล์ตัวอย่างของ starter อัตโนมัติ
import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const args = process.argv.slice(2)
const force = args.includes('--force')
const prev = args.find((a) => !a.startsWith('--'))
if (!prev) {
  console.log('วิธีใช้: npm run carry -- ../<โฟลเดอร์สัปดาห์ก่อน>   เช่น  npm run carry -- ../w03')
  process.exit(1)
}

const { files } = JSON.parse(fs.readFileSync('personal.json', 'utf8'))
const backup = '.carry-backup'
fs.mkdirSync(backup, { recursive: true })

const copied = []
for (const f of files) {
  const from = path.join(prev, f)
  if (!fs.existsSync(from)) {
    console.log(`- ข้าม ${f} (ไม่พบในสัปดาห์ก่อน ใช้ไฟล์ตัวอย่างของ starter)`)
    continue
  }
  if (!fs.existsSync(f)) {
    console.log(`- ข้าม ${f} (starter สัปดาห์นี้ยังไม่ใช้ไฟล์นี้)`)
    continue
  }
  const bak = path.join(backup, f.replaceAll('/', '__'))
  if (!fs.existsSync(bak)) fs.copyFileSync(f, bak) // เก็บไฟล์ตัวอย่างดั้งเดิมของ starter ไว้ครั้งแรกครั้งเดียว
  const cur = fs.readFileSync(f, 'utf8')
  const last = fs.existsSync(bak + '.carried') ? fs.readFileSync(bak + '.carried', 'utf8') : null // เนื้อหาที่ carry ใส่ไว้ครั้งก่อน
  if (!force && cur !== fs.readFileSync(bak, 'utf8') && cur !== last && cur !== fs.readFileSync(from, 'utf8')) {
    console.log(`! ข้าม ${f} (มีการแก้ไขในสัปดาห์นี้แล้ว ไม่ทับ ถ้าต้องการทับใช้ npm run carry -- ${prev} --force)`)
    continue
  }
  fs.copyFileSync(from, f)
  fs.copyFileSync(from, bak + '.carried')
  copied.push([f, bak])
  console.log(`+ คัดลอก ${f}`)
}

if (copied.length === 0) {
  console.log('ไม่มีไฟล์ให้คัดลอก ใช้ starter ตามเดิม')
  process.exit(0)
}

console.log('\nกำลังตรวจด้วย npm run check ...')
const r = spawnSync('npm run check', { shell: true, encoding: 'utf8' })
if (r.status === 0) {
  console.log('✓ ไฟล์ส่วนตัวผ่านการตรวจ พร้อมใช้งาน')
} else {
  console.log(r.stdout + r.stderr)
  for (const [f, bak] of copied) {
    fs.copyFileSync(bak, f)
    fs.rmSync(bak + '.carried', { force: true })
  }
  console.log('✗ ไฟล์ส่วนตัวมี error จึงย้อนกลับไปใช้ไฟล์ตัวอย่างของ starter แล้ว')
  console.log('  (ไฟล์เดิมของคุณยังอยู่ในโฟลเดอร์สัปดาห์ก่อน ให้ครูช่วยดูตอนท้ายคาบ)')
}
