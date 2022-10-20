/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import * as zod from 'zod'
import { useForm, useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CyclesContext } from '../../../../context/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1"></option>
        <option value="Projeto 2"></option>
        <option value="Projeto 3"></option>
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        placeholder="00"
        type="number"
        id="minutesAmount"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true, min: 5 })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
