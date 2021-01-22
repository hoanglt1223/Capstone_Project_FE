import * as React from 'react'
import { connect, useDispatch } from 'react-redux'
import { IRootState } from './stores'
import { Dispatch } from 'redux'
import * as asyncActions from './stores/demo/async-actions'
import { DemoActions } from './stores/demo/types'
import { useSelector } from 'react-redux'

const mapStateToProps = ({ demo }: IRootState) => {
  const { list, loading } = demo
  return { list, loading }
}

const mapDispatcherToProps = (dispatch: Dispatch<DemoActions>) => {
  return {
    addItem: (item: string) => asyncActions.addItemAsync(dispatch, item)
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>

interface IState {
  inputText: string
}

// class App extends React.Component<ReduxType, IState> {
//   public state: IState = {
//     inputText: ''
//   }
//   public onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ inputText: e.target.value })
//   }

//   public onAddClick = () => {
//     this.props.addItem(this.state.inputText)
//     console.log('TCL ~ file: App.tsx ~ line 51 ~ App ~ this.state.inputText', this.state.inputText)
//     this.setState({ inputText: '' })
//   }

//   public render() {
//     const { list, loading } = this.props
//     console.log('TCL ~ file: App.tsx ~ line 42 ~ App ~ render ~ list', list)

//     return (
//       <div style={{ margin: '20px' }}>
//         <input value={this.state.inputText} onChange={this.onInputChange} />
//         <button onClick={this.onAddClick}>Add</button>
//         {loading && <div>Loading...</div>}
//         <ul>
//           {list.map(l => (
//             <li key={l}>{l}</li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }
const selectDemoList = (state: IRootState) => state.demo.list

function App(props: { addItem?: any; list?: any; loading?: any }) {
  const { list, loading } = props
  const [inputText, setInputText] = React.useState('')
  const demoList = useSelector(selectDemoList)
  const dispatch = useDispatch()

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const onAddClick = () => {
    // props.addItem(inputText)
    asyncActions.addItemAsync(dispatch, inputText)
    setInputText('')
  }

  return (
    <div style={{ margin: '20px' }}>
      <input value={inputText} onChange={onInputChange} />
      <button onClick={onAddClick}>Add</button>
      {loading && <div>Loading...</div>}
      <ul>
        {demoList.map((l: any) => (
          <li key={Math.random().toString()}>{l}</li>
        ))}
      </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatcherToProps)(App)
