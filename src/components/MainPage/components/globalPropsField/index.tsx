import styles from './cssProps.module.scss'

const mockGlobalProps = [
  {
    name: 'isActive',
    value: 'true'
  },
  {
    name: 'editMode',
    value: 'false'
  }
]
const GlobalPropsField = () => {
  return (
    <div className={styles.container}>
      {Array.isArray(mockGlobalProps) && mockGlobalProps.map(props => {
        return (
          <div>
            {props.name} : {props.value}
          </div>
        )
      })}
    </div>
  )
}

export default GlobalPropsField
