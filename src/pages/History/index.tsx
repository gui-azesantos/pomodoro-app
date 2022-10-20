// Modules
import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CyclesContext } from '../../context/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(
              ({
                id,
                minutesAmount,
                startDate,
                task,
                finishedDate,
                interruptedDate,
              }) => {
                return (
                  <tr key={id}>
                    <td>{task}</td>
                    <td>{minutesAmount} minutos</td>
                    <td>
                      {formatDistanceToNow(startDate, {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </td>
                    <td>
                      {finishedDate && (
                        <Status statusColor="green">Concluido</Status>
                      )}
                      {interruptedDate && (
                        <Status statusColor="red">Interrompido</Status>
                      )}
                      {!interruptedDate && !finishedDate && (
                        <Status statusColor="yellow">Em andamento</Status>
                      )}
                    </td>
                  </tr>
                )
              },
            )}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
