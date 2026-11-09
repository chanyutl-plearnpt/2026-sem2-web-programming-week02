// ตัวอย่างหลังลองหน้า 6–8: เก็บนอก src ก่อนเปลี่ยนไปใช้ portfolio
const name = 'มะลิ'
const age = 16
const isStudent = true
console.log(name, age, isStudent)

const person = { name: name, age: age, isStudent: isStudent }
console.log(person.name)

const scores = [80, 75, 90]
console.log(scores[0])
const people = [person, { name: 'ต้น', age: 17, isStudent: true }]
console.log(people[0].name, people.length)

export default function App() {
  return <p>ดูผลที่ Console ของเบราว์เซอร์ (F12 → Console)</p>
}
