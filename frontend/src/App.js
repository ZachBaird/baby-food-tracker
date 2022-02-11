import React, { useState } from "react";
import { GlobalProvider } from "./contexts/GlobalState";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { ChildCareRounded, AddRounded, Person } from "@mui/icons-material";
import { BabiesPage, AddBabyPage, ProfilePage } from "./pages";
import Header from "./components/Header";
import Body from './components/Body';
import "./App.css";

const App = () => {
  const [bottomNavValue, setBottomNavValue] = useState();

  return (
    <GlobalProvider>
      <div className="app">
        <Header />
        <Body>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<BabiesPage setNav={setBottomNavValue} />} />
              <Route path="/add-baby" element={<AddBabyPage setNav={setBottomNavValue} />} />
              <Route path="/profile" element={<ProfilePage setNav={setBottomNavValue} />} />
            </Routes>
            <Paper
              className="bottom-nav"
              sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
              elevantion={3}
            >
              <BottomNavigation
                value={bottomNavValue}
                onChange={(e, nv) => setBottomNavValue(nv)}
              >
                <BottomNavigationAction
                  label="Babies"
                  value="babies"
                  component={Link}
                  to={"/"}
                  icon={<ChildCareRounded />}
                />
                <BottomNavigationAction
                  label="Add Baby"
                  value="addbaby"
                  component={Link}
                  to={"/add-baby"}
                  icon={<AddRounded />}
                />
                <BottomNavigationAction
                  label="Profile"
                  value="profile"
                  component={Link}
                  to="/profile"
                  icon={<Person />}
                />
              </BottomNavigation>
            </Paper>
          </BrowserRouter>
        </Body>
      </div>
    </GlobalProvider>
  );
};

export default App;
