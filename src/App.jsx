import styled from "@emotion/styled"
import Dashboard from "./components/Dashboard"



function App() {


  return (
    <Page>
 <Dashboard/>
    </Page>
  )
}

const Page = styled.div`
display : flex;
min-height: 100vh;
justify-content: center;
align-items: center;
`

export default App
