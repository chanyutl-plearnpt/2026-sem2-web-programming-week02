import { profile, projects } from './data'

console.log('ชื่อ:', profile.name)
console.log('ชื่อผลงานทั้งหมด:', projects.map((p) => p.title))
console.log('ปีของผลงานทั้งหมด:', projects.map((p) => p.year))

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>{profile.name}</h1>
      <p>{profile.role}</p>
      <h2>ผลงานของฉัน</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.title}>
            {p.title} ({p.year})
          </li>
        ))}
      </ul>
    </div>
  )
}
