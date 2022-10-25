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

  useEffect(() => {
      setFilteredList(filterListByMonth(list, currentMonth))
  }, [currentMonth, list])

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
          />
            
          {/* area de inserir infos */}
            <TableArea list={filteredList}/>
        </C.Body>
      </C.Container>
    )
}

export default App
