import Router from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./hooks/store"
function App() {
  return (
    <>
      <Provider store={store}>
        <Router></Router>
      </Provider>
    </>
  )
}

export default App
