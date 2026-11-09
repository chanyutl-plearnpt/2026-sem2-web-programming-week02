import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { profile, projects } from './data'

console.log('ชื่อ:', profile.name)
console.log('ชื่อผลงานทั้งหมด:', projects.map((p) => p.title))
console.log('ปีของผลงานทั้งหมด:', projects.map((p) => p.year))

export default function App() {
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
    </Stack>
  )
}
