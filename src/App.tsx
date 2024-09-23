
import Hello from './components/Hello'
import Counter from './components/Counter'
import Other from './components/Other'
import Other1 from './components/Other1'
import Somejs from './components/Somejs'
import Somejs1 from './components/Somejs1'
import Somejs2 from './components/Somejs2'
import Form from './components/Form'
import Todo from './components/Todo'
const newdata = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]
const course = [
  {
    id: 1,
    name: 'Half Stack application developnement',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name:'Using props to pass data',
        exercises:7,
        id:2
      },
      {
        name:'state of a component',
        exercises:14,
        id:3
      }
    ]
  }
]
const App = () => {
  return (
    <div>
      <Hello name="Balaji Nagesh Motkulwar" age={22} />
      <Counter />
      <Other />
      <Other1 />
      <Somejs />
      <Somejs1 notes={newdata} />

      <Somejs2 id={course[0].id} name={course[0].name} parts={course[0].parts}
      course={course}/>
      <Form/>
      <Todo/>
    </div>
  )
}

export default App