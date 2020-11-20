import React from 'react'
import { fetchCountryList } from '../actions/actions'
import { Container, Select, SidePanel } from './styledComponents'
import TableContent from './TableContent'

const MainContent = () => {
  const [state, setState] = React.useState([])
  const [filter, setFilter] = React.useState('All')
  const [sortValue, setSortValue] = React.useState('None')

  React.useEffect(() => {
    fetchCountryList().then(data => {
      setState(data)
    })
  }, [])

  const handleSelection = (value) => {
    setFilter(value)
  }

  const handleSortSelection = (value) => {
    setSortValue(value)
  }

  return (
    <Container>
      <SidePanel>
        <div>
          <Select onChange={e => handleSelection(e.target.value)}>
            <option>All</option>
            {state.map(country => <option>{country.name}</option>)}
          </Select>
        </div>
        <div>
          Sort:
          <Select onChange={e => handleSortSelection(e.target.value)}>
            <option>None</option>
            <option>Population Ascending</option>
            <option>Population Descending</option>
          </Select>
        </div>
      </SidePanel>
      <TableContent tableData={state} filter={filter} sortValue={sortValue} />
    </Container>
  )
}

export default MainContent