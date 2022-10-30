import { useEffect, useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/item'
import { Category } from './types/category'
import { items } from './data/items'
import { categories } from './data/categories'
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'
import { InputArea } from './components/InputArea'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' ;

function App() {
  const themes = {
    colors:{
      primaryColor:'blue',
    },
    boxShadow:{
      primaryShadow:'0 0 6px #00009630',
    }
  }

  const notifySuccess = () => toast.success('Criado com sucesso!', {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  })

  const notifyError = (erros:string) => toast.error(erros, {
    position: "top-right",
    autoClose: 3500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  })

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
  
  const handleAddItem = (item:Item) => {
      const newList = [...list]
      newList.push(item)
      setList(newList)
  }

  const handleMonthChange = (newMonth:string) => {
    setCurrentMonth(newMonth)
  }
    return (
      <ThemeProvider theme={themes}>
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
              
            <InputArea 
            onAdd={handleAddItem} 
            notifySuccess={notifySuccess}
            notifyError={notifyError}
            />
            {/* <button onClick={notifyError}>Notify</button> */}
            
            <TableArea list={filteredList}/>
          </C.Body>

          <GlobalStyle />
          <ToastContainer />
        </C.Container>
      </ThemeProvider>
    )
}

export default App
