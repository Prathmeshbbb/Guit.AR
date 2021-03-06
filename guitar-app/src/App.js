import AllSongs from "./allsongs/AllSongs";
import Login from "./login/login";
import PlaySong from "./PlaySong/PlaySong";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import { useSelector } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddGuitar from "./addGuitar/AddGuitar";
import Settings from "./Settings/Settings";
import Info from "./info/Info";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#FFFFFF",
      },
    },
  });

  const loginTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#1DB954",
      },
      secondary: {
        main: "#1DB954",
      },
    },
  });

  var login = (
    <MuiThemeProvider theme={loginTheme}>
      <Login />
    </MuiThemeProvider>
  );

  var addGuitar = <AddGuitar />;

  var playSong = (props) => <PlaySong {...props} />;

  var settings = <Settings />;

  var home = (
    <MuiThemeProvider theme={theme}>
      <div className="app__body">
        <AllSongs />
        <NavBar />
      </div>
    </MuiThemeProvider>
  );

  var getStarted = <Info />;

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/PlaySong">{!isLoggedIn.user ? login : playSong}</Route>

          <Route path="/AddGuitar">{!isLoggedIn.user ? login : addGuitar}</Route>

          <Route path="/Settings">{!isLoggedIn.user ? login : settings}</Route> 

          <Route path="/Home">{!isLoggedIn.user ? login : home}</Route>

          <Route path="/">{getStarted}</Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
