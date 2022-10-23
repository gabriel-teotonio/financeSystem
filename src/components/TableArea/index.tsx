import React from 'react'
import { Item } from '../../types/item'
import { TableItem } from '../TableItem'
import * as C from './style'

type props = {
    list:Item[]
}

export const TableArea = ({list}:props) => {
  return (
    <C.Table>
        <thead>
            <tr>
                <C.TableHeadColumn>Data</C.TableHeadColumn>
                <C.TableHeadColumn>Categoria</C.TableHeadColumn>
                <C.TableHeadColumn>Título</C.TableHeadColumn>
                <C.TableHeadColumn>Valor</C.TableHeadColumn>
            </tr>
        </thead>
        <tbody>
            {list.map((item, index) => (
                <TableItem key={index} item={item}/>
            ))}
        </tbody>
    </C.Table>
  )
}
