const Button = (props) => {
  return (
    <button style={{ backgroundColor: props.color }}>{props.children}{props.text}</button>
  )
}

export { Button }