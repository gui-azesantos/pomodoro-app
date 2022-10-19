import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any)

export function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <h1>
      NewCycleForm: {activeCycle}
      <button
        onClick={() => {
          setActiveCycle(activeCycle + 1)
        }}
      >
        Mudar Ciclo
      </button>
    </h1>
  )
}

export function Countdown() {
  const { activeCycle } = useContext(CyclesContext)
  return <h1>Countdown: {activeCycle}</h1>
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)
  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <h1>
        <NewCycleForm />
        <Countdown />
      </h1>
    </CyclesContext.Provider>
  )
}
