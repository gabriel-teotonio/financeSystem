import React from 'react'
import { formatCurrentMonth } from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem'
import * as C from './style'

type Props = {
    currentMonth: string
    onMonthChange: (newMonth:string) => void;
    expense:number,
    income:number
}

export const InfoArea = ({currentMonth,onMonthChange, income, expense}:Props) => {
  
  const handlePrevMonth = () => {
    const [year, month] = currentMonth.split('-')
    const currentDate = new Date(parseInt(year),parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() - 1)
    console.log(month)

    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }
  const handleNextMonth = () => {
    const [year, month] = currentMonth.split('-')
    const currentDate = new Date(parseInt(year),parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() + 1)
    
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  return (
    <C.Container>
        <C.MonthArea>
            <C.MonthIcon onClick={handlePrevMonth}>⬅️</C.MonthIcon>
            <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
            <C.MonthIcon onClick={handleNextMonth}>➡️</C.MonthIcon>
        </C.MonthArea>
        <C.ResumeArea>
            <ResumeItem title="Despesas" value={expense} />
            <ResumeItem title="Receitas" value={income} />
            <ResumeItem 
              title="Balanço" 
              value={income - expense}
              color={(income - expense) < 0 ? 'Red': 'green'}
            />
        </C.ResumeArea>
    </C.Container>
  )
}
