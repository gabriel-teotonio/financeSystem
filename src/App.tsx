import { useEffect, useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/item'
import { Category } from './types/category'
import { items } from './data/items'
import { categories } from './data/categories'
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'


function App() {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [currentMonth, list])

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value
      }else{
        incomeCount += filteredList[i].value
      }
    }
    setExpense(expenseCount)
    setIncome(incomeCount)
  },[filteredList])
  
  const handleMonthChange = (newMonth:string) => {
    setCurrentMonth(newMonth)
  }
    return (
      <C.Container>
        <C.Header>
          <C.HeaderTitle>Sistema Financeiro</C.HeaderTitle>
        </C.Header>
        <C.Body>
          <InfoArea
           currentMonth={currentMonth}
           onMonthChange={handleMonthChange}
           income={income}
           expense={expense}
          />
            
           
          <TableArea list={filteredList}/>
        </C.Body>
      </C.Container>  
    )
}

export default App
