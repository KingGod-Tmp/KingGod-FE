import React from 'react'
import { useAppDispatch } from '../../../redux/hooks'
import { resetShopDataMW } from '../../../redux/modules/shop'

const BattleShopRecycle = () => {
  const dispatch = useAppDispatch()
  const ClickToReset = () =>{
    dispatch(resetShopDataMW())
  }


  return (
    <div onClick={ClickToReset} >새로고침</div>
  )
}

export default BattleShopRecycle