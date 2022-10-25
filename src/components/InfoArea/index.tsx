import React from 'react'
import { formatCurrentMonth } from '../../helpers/dateFilter'
import * as C from './style'

type Props = {
    currentMonth: string
    onMonthChange: (newMonth:string) => void;
}

export const InfoArea = ({currentMonth,onMonthChange}:Props) => {
  
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

        </C.ResumeArea>
    </C.Container>
  )
}
