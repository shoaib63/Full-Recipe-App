
// Pages
import Pages from "./pages/Pages.js"
import Category from "./components/Category.js";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search.js";
import styled from 'styled-components'

import {Link} from 'react-router-dom'
import {GiKnifeFork} from 'react-icons/gi'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav>
          <GiKnifeFork />
          <Logo to={`/`} >delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two' , cursive;
`;


const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

export default App;
