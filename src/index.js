import React from 'react'
import ReactDOM from 'react-dom'
import stya from './styles.css'
import ScoreBoard from './Scoreboard'
import H from './header'
import Schedule from './Schedule'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Countdown from 'react-countdown';

  const App = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div>
        <H />
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} centered>
              <Tab label="Home" value="1" />
              <Tab label="Schedule" value="2" />
              <Tab label="Scoreboard" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box style={stya}>
              {/*Change the countdown and last race top 3 from here*/}
              <h1 >Countdown to the next race:</h1>
              <h1><Countdown date={new Date('2021-11-21T16:00:00')} /></h1>
              <br></br>
              <h1>Top 3 finish of the last race:</h1>
              <h2>1.  Lewis Hamilton</h2>
              <h2>2.  Max Verstappen</h2>
              <h2>3.  Valtteri Bottas</h2>

            </Box>
          </TabPanel>
          <TabPanel value="2">
              <Schedule />
          </TabPanel>
          <TabPanel value="3">
            <ScoreBoard />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
    
    );
  }

  ReactDOM.render(
    <App />, document.getElementById('root'));