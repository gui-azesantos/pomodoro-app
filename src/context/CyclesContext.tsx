import { createContext, ReactNode, useState } from 'react'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CreateNewCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentAsFinished: () => void
  amountSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (props: CreateNewCycleData) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCyclesId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentAsFinished() {
    setCycles((state) =>
      state.map((state) => {
        if (state.id === activeCycleId) {
          return { ...state, finishedDate: new Date() }
        } else {
          return { ...state }
        }
      }),
    )
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCycle({ task, minutesAmount }: CreateNewCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCyclesId(id)
    setAmountSecondsPassed(0)

    // reset()
  }

  function interruptCurrentCycle() {
    setCycles((state) =>
      state.map((state) => {
        if (state.id === activeCycleId) {
          return { ...state, interruptedDate: new Date() }
        } else {
          return { ...state }
        }
      }),
    )

    setActiveCyclesId(null)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
