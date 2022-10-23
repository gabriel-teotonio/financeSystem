import { categories } from '../../data/categories'
import { formatDate } from '../../helpers/dateFilter'
import { Item } from '../../types/item'
import * as C from './style'

type Props = {
    item:Item
}

export const TableItem = ({item}:Props) => {
  return (
    <C.TableLine>
        <C.TableColumn width={100}>{formatDate(item.date)}</C.TableColumn>
        <C.TableColumn width={130}>
          <C.Category color={categories[item.category].color}>
              {categories[item.category].title}
          </C.Category>
          </C.TableColumn>
        <C.TableColumn>{item.title}</C.TableColumn>
        <C.TableColumn width={150}>
          <C.Value color={categories[item.category].expense ? '#ff4a4a' : '#00e76e'}>
              R$ {item.value}
          </C.Value>
        </C.TableColumn>
    </C.TableLine>
  )
}
