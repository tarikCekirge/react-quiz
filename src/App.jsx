import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {
  return (
    <section className="flex flex-col  mx-auto max-w-xl">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </section>
  )
}

export default App