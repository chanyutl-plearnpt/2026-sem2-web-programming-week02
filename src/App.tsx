import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { profile, projects } from './data'

console.log('ชื่อ:', profile.name)
console.log('ชื่อผลงานทั้งหมด:', projects.map((p) => p.title))
console.log('ปีของผลงานทั้งหมด:', projects.map((p) => p.year))

export default function App() {
  const skill = profile.skills[0]
  const latest = projects[2]

  return (
    <Stack spacing={1} sx={{ p: 3 }}>
      <Typography variant="h4">{profile.name}</Typography>
      <Typography color="text.secondary">{profile.role}</Typography>
      <Typography variant="h6">ผลงานของฉัน</Typography>
      {projects.map((p) => (
        <Typography key={p.title}>
          {p.title} ({p.year})
        </Typography>
      ))}

      {/* ชุดฝึก C1: ข้อความจากข้อมูลตรง ๆ */}
      <Stack spacing={0.5}>
        <Typography variant="h5">{profile.nickname}</Typography>
        <Typography color="text.secondary">{profile.tagline}</Typography>
      </Stack>

      {/* C2: ตัวแปรที่ดึงจาก array แล้วใช้ใน Chip และ Typography */}
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <Chip label={skill.name} />
        <Typography>
          {latest.title} ({latest.year})
        </Typography>
      </Stack>

      {/* C3: เขียนทีละตำแหน่ง (D1 จะแทน Chip สามใบนี้ด้วย map) */}
      {/* <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <Chip label={profile.tools[0]} />
        <Chip label={profile.tools[1]} />
        <Chip label={profile.tools[2]} />
        <Button variant="contained">{projects[2].title}</Button>
      </Stack> */}

      {/* D1: array ของข้อความ → Chip ทุกตัว */}
      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
        {profile.tools.map((tool) => (
          <Chip key={tool} label={tool} />
        ))}
        <Button variant="contained">{projects[2].title}</Button>
      </Stack>

      {/* D2: array ของ object → Chip ที่ต่อข้อความด้วย template string */}
      <Stack direction="row" spacing={1}>
        {profile.skills.map((s) => (
          <Chip key={s.name} color="primary" label={`${s.name} ${s.level}%`} />
        ))}
      </Stack>

      {/* D3: map ซ้อน map → ชื่อ คำอธิบาย และ Chip แท็กของแต่ละ project */}
      <Stack spacing={2}>
        {projects.map((p) => (
          <Stack key={p.title} spacing={0.5}>
            <Typography variant="subtitle1">{p.title}</Typography>
            <Typography color="text.secondary">{p.description}</Typography>
            <Stack direction="row" spacing={1}>
              {p.tags.map((tag) => (
                <Chip key={tag} size="small" label={tag} />
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
