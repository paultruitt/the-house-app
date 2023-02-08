import { ThemeProvider } from "@mui/material";
import { appTheme } from "../themes/theme";
import React from 'react'
import NavBar from "../components/NavBar";

export function BlackJack() {
    return (
        <ThemeProvider theme={appTheme}>
          <div className="App">
            <NavBar />
            <header className="App-header">
                <p>
                Edit <code>src/App.js</code> and save to reload BLACK JACK.
              </p>
              <p>
                Edit <code>src/App.js</code> and save to reload BLACK JACK.
              </p>
              <p>
                Edit <code>src/App.js</code> and save to reload BLACK JACK.
              </p>
              <p>
                Edit <code>src/App.js</code> and save to reload BLACK JACK.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </ThemeProvider>
      )
}