import Todo from "./components/to-do"

function App() {
  return (
    <div className="w-full h-screen py-32 bg-[#e7e6df]">
      <div className="relative w-1/2 h-3/4 mx-auto bg-white rounded shadow-md">
        <Todo />
      </div>
    </div>
  )
}

export default App
