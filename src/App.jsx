import { Suspense, lazy } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Loader from './Utils/Loader'
import { jsQuizz } from './Config/Constants'

const Home = lazy(() => import("./Pages/Home"))
const LoginSignUp = lazy(() => import('./Pages/LoginSignUp'))
const CalendarComponent = lazy(() => import("./Pages/Calendar"))
const Dashboard = lazy(() => import("./Pages/Dashboard"))
const Quiz = lazy(() => import("./Pages/Quiz"))

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Suspense fallback={<Loader />}>
          <Home />
        </Suspense>} />
        <Route path='/' element={<Suspense fallback={<Loader />}>
          <LoginSignUp showName={false} authName="Login" showForgotPassword={true} />
        </Suspense>} />
        <Route path='/signup' element={<Suspense fallback={<Loader />}>
          <LoginSignUp showName={true} authName="Signup" showForgotPassword={false} />
        </Suspense>} />
        <Route path='/calendar' element={<Suspense fallback={<Loader />}>
          <CalendarComponent />
        </Suspense>} />
        <Route path='/dashboard' element={<Suspense fallback={<Loader />}>
          <Dashboard />
        </Suspense>} />
        <Route path='/quiz' element={<Suspense fallback={<Loader />}>
          <Quiz questions={jsQuizz.questions} />
        </Suspense>} />
      </Routes>
    </HashRouter>
  )
}

export default App
