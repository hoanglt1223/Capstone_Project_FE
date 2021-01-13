import styles from './cssProps.module.scss'

const mockCSSProps = [
  {
    name: 'margin',
    value: '15px'
  },
  {
    name: 'padding',
    value: '20px'
  },
  {
    name: 'Width',
    value: '30px'
  },
]
const CssPropsField = () => {
  return (
    <div className={styles.container}>
      {Array.isArray(mockCSSProps) && mockCSSProps.map(props => {
        return (
          <div>
            {props.name} : {props.value}
          </div>
        )
      })}
    </div>
  )
}

export default CssPropsField
