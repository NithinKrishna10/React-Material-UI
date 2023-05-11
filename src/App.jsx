import { useState } from 'react'
import Test from './Test'
import NavApp from './components/NavApp'
import MenuDemo from './components/MenuDemo'
import TabsDemo from './components/TabsDemo'
import CardDemo from './components/CardDemo'
import { Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavApp/>
      <br />
      <br />
      <Test/>

      <br />
      <MenuDemo/>

      <br />

      <TabsDemo/>
      <br />

<Box sx={{display:'flex' , margin:'5px'}}>

      <CardDemo/> <CardDemo/>
</Box>

    </div>
  )
}

export default App
