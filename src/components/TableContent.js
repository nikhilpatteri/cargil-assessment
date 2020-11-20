import React from 'react'
import { HeaderCell, Table, TBody, TCell, TCellItem, THeader, TRow } from './styledComponents'


const headerItems = [
  {
    title: 'Country Name'
  },{
    title: 'Capital City',
  }, {
    title: 'Currency',
  }, {
    title: 'Languages',
  }, {
    title: 'Population'
  }
]

const TableContent = ({ tableData = [], filter, sortValue }) => {
  const [state, setState] = React.useState(tableData)

  React.useEffect(() => {
    let newState = [];
    if (sortValue) {
      switch(sortValue) {
        case 'None': {
          newState = tableData
          break;
        }
        case 'Population Ascending': {
          newState = state.sort((a, b) => {
            if (a.population > b.population) {
              return 1
            }
            if (a.population < b.population) {
              return -1
            }
            return 0
          })
          break;
        }
        case 'Population Descending': {
          newState = state.sort((a, b) => {
            if (a.population > b.population) {
              return 1
            }
            if (a.population < b.population) {
              return -1
            }
            return 0
          })
          newState.reverse()
          break;
        }
        default: break;
      }
      setState(newState)
    }
  }, [sortValue, state, tableData])

  const renderRows = (row, index) => {
    return (
      <TRow key={`${index}row-data`}>
        <TCell>{row.name.toUpperCase()}</TCell>
        <TCell>{row.capital}</TCell>
        <TCell>{row.currencies.map(currency =>
          <TCellItem key={currency.name+currency.code}>{currency.name}</TCellItem>)}
        </TCell>
        <TCell>{row.languages.map(language =>
          <TCellItem key={language.name}>{language.name}</TCellItem>)}
        </TCell>
        <TCell right>{row.population}</TCell>
      </TRow>
    )
  }

  return (
    <Table>
    <THeader>
      {headerItems.map(item => <HeaderCell key={item.title}>{item.title}</HeaderCell>)}
    </THeader>
    <TBody>
      {filter === 'All' && state.map((row, index) => renderRows(row, index))}
      {filter !== 'All' && state.filter(row => row.name === filter).map((row, index) => renderRows(row, index))}
    </TBody>
  </Table>
  )
}

export default TableContent