
import Hello from './components/Hello'
import Counter from './components/Counter'
import Other from './components/Other'
import Other1 from './components/Other1'
const App = () => {
  return (
    <div>
      <Hello name="Balaji Nagesh Motkulwar"  age={22}/>
      <Counter/>
      <Other/>
      <Other1/>
    </div>
  )
}

export default App