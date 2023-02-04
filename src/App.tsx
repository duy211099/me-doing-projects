import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { AlpacaScreen } from './modules/alpaca-image-genegator/screens'
import Demo from './modules/alpaca-image-genegator/screens/DemoOpenApi/Demo'

const router = createBrowserRouter([
    {
      path: "/",
      element: <AlpacaScreen />,
    },
    {
      path: "/demo-gpt",
      element: <Demo />,
    },
  ]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
