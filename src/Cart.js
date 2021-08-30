export default function Cart(props) {
  return (
    (!props.status) ? null :
    <section id='cart'>
      Hello!
    </section>
  )
}