import './App.css'

function App() {
  return (
    <div className='m-10'>
      <div className='flex-grow place-content-between'>
        <div className='header'>PHOTOGRAPHY</div>
        <div className='subHeader text-right pb-10'>First<br />LastName</div>
      </div>
      <div className='grid grid-cols-4 grid-rows-1 gap-3'>
        <div className='relative hover:opacity-50 transistion duration-500'>
          <img className='h-full w-full hover:opacity-50 transition duration-500' src="src/assets/photo01.png" alt="photo01"/>
          <div className='label absolute transition opacity-0 hover:opacity-100 duration-500 inset-0 flex h-full justify-center items-center'>STREET</div>
        </div>
        <div className='relative'>
          <img className='h-full w-full hover:opacity-50 transition duration-500' src="src/assets/photo01.png" alt="photo01"/>
          <div className='label absolute transition opacity-0 hover:opacity-100 duration-500 inset-0 flex h-full justify-center items-center'>STREET</div>
        </div>
        <div className='relative'>
          <img className='h-full w-full hover:opacity-50 transition duration-500' src="src/assets/photo01.png" alt="photo01"/>
          <div className='label absolute transition opacity-0 hover:opacity-100 duration-500 inset-0 flex h-full justify-center items-center'>STREET</div>
        </div>
        <div className='relative'>
          <img className='h-full w-full hover:opacity-50 transition duration-500' src="src/assets/photo01.png" alt="photo01"/>
          <div className='label absolute transition opacity-0 hover:opacity-100 duration-500 inset-0 flex h-full justify-center items-center'>STREET</div>
        </div>
      </div>
    </div>
  )}

export default App