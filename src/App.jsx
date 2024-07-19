import ToDoList from './components/to-do-list'

function App() {
  return (
    <div className="w-full h-screen py-32 bg-[#e7e6df]">
      <div className="w-96 mx-auto bg-white rounded shadow-md">
        <ToDoList />
      </div>
    </div>
  )
}

export default App
