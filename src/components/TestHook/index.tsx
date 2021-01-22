import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IRootState } from '../../stores'
import { addItemToList } from '../../stores/demo/actions'

const TestHook = () => {
  const list = useSelector((state: IRootState) => state.demo.list)
  const dispatch = useDispatch()
  const dispatchAddToCart = (input: string) => dispatch(addItemToList(input))

  return (
    <>
      <h2 className="title">use hook Redux</h2>
      <input onChange={event => dispatchAddToCart(event.target.value)}></input>
      <ul>
        {list.map((l: string) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </>
  )
}

export default React.memo(TestHook)
