import React from 'react'
import styled from 'styled-components'

const UnitCell = () => {
  return (
    <UnitCellBox>Unit or Item</UnitCellBox>
  )
}

const UnitCellBox = styled.div`
    width: 50px;
    height: 50px;
    margin: 5px;
`

export default UnitCell