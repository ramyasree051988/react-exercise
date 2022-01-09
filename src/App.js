import React, {Suspense} from 'react';
import styled, { ThemeProvider } from "styled-components";
import { crukTheme } from "@cruk/cruk-react-components";
import { InputForm } from "./components/input-form";

const SiteWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

function App() {
  return (
    <Suspense fallback="loading">
    <ThemeProvider theme={crukTheme}>
      <SiteWrapper>
        <div>
          <h1>CRUK technical exercise - React</h1>
        </div>
        <div>
          <InputForm />
        </div>
      </SiteWrapper>
    </ThemeProvider>
    </Suspense>
  );
}

export default App;
