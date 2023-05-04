import { useState } from "react"
import { Select, SelectOption } from "./Select"

// Defining the values and labels for the options
const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
]

function App() {
  // Sets the value, can either be an option or undefined
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])

  return (
    <>
    {/* Sets value to the selected option(s) */}
      <Select
        multiple
        options={options}
        value={value1}
        onChange={o => setValue1(o)}
      />
      <br />
      <Select 
        options={options} 
        value={value2} 
        onChange={o => setValue2(o)}
        />
    </>
  )
}

export default App