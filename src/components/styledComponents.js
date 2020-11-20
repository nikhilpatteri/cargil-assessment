import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 60px);
  margin: 15px;
  width: 100%;
  flex-direction: column;
`

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  border: 1px solid lightgrey;
  margin: auto;
`

export const THeader = styled.div`
  display: flex;
  height: 40px;
  font-weight: bold;
  font-size: 1rem;
  border-bottom: 1px solid lightgrey;
`

export const TBody = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderCell = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-right: 1px solid lightgrey;
`

export const TRow = styled.div`
  display: flex;
  width: 100%;
  min-height: 40px;
  border-bottom: 1px solid lightgrey;
  padding-top: 5px;
  padding: bottom: 5px;
`

export const TCell = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${props => props.right ? 'row-reverse' : 'column'};
  padding: 0px 10px;
  border-right: 1px solid lightgrey;
`

export const TCellItem = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 0px;
`

export const SidePanel = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
`

export const Select = styled.select`
  height: 30px;
  border-color: lightgrey;
  border-radius: 5px;
  outline: none;
  margin-right: 30px;
`