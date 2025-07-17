import { Footer } from "./Footer"
import { Header } from "./Header"

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        <h2>{props.title}</h2>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export { Layout }