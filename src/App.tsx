import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loading from "./components/Loading"

const Home = lazy(() => import("./screens/Home"))

const App = () => {
  return (
    <>
    <Suspense fallback={<Loading />}>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>
     </BrowserRouter> 
    </Suspense>
    </>
  )
}

export default App