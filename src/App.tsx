import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField'
import ChartDrawer from './ChartDrawer';
import { getSampleForInputs, getAlphaForPower, genArray } from './StatsUtils';
import { useState } from "react";

function App() {
  const [alpha, setAlpha] = useState(5 as number);
  const [power, setPower] = useState(80 as number);
  const [sample, setSample] = useState(10000 as number);
  const [variance, setVariance] = useState(2 as number);
  const [baseRate, setBaseRate] = useState(50 as number);
  const [mde, setMDE] = useState(0.01 as number);

  useEffect(() => {
    // console.log(alpha, power, sample, variance, baseline, mde);
  });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <InputField callback={null} title="test" max={100} min={10} defaultValue={1}></InputField> */}
      </header>
      <div className="flexbox-container">
        <InputField callback={setAlpha} title="Significance Level" min={1} max={99} step={1}
          defaultValue={alpha}></InputField>
        <InputField callback={setPower} title="Power" min={1} max={99} step={1}
          defaultValue={power}></InputField>
        <InputField callback={setSample} title="Sample Size" min={20} max={20000} valueMax={1000000000}
          step={10} defaultValue={sample}></InputField>
        <InputField callback={setBaseRate} title="Base Rate (%)" min={1} max={99}
          step={1} defaultValue={baseRate}></InputField>
        <InputField callback={setMDE} title="Target % Lift" min={-90} max={100} valueMax={100000}
          step={0.5} defaultValue={mde}></InputField>
      </div>
      <div className="flexbox-container">
        {/* <ChartDrawer id={'test'} xaxis={[1,2,3]} series={[{name:'test', data:[2,3,5]}]}></ChartDrawer> */}

        <ChartDrawer id={'SampleByAlpha'} xaxis={genArray(1, 19, 1)}
          title="Sample Needed by Alpha"
          series={[{
            name: 'test', data: genArray(1, 19, 1)
              .map((x) => getSampleForInputs(x, power, baseRate, mde))
          }]}></ChartDrawer>
        <ChartDrawer id={'SampleByBaseRate'} xaxis={genArray(1, 24, 4)}
          title="Sample Needed by Base Rate"
          series={[{
            name: 'test2', data: genArray(1, 24, 4)
              .map((x) => getSampleForInputs(alpha, power, x, mde))
          }]}></ChartDrawer>
        <ChartDrawer id={'SampleByBaseRate'} xaxis={genArray(1, 10, 1)}
          title="Sample Needed by Target Lift"
          series={[{
            name: 'test2', data: genArray(1, 10, 1)
              .map((x) => getSampleForInputs(alpha, power, baseRate, x))
          }]}></ChartDrawer>
      </div>
    </div>
  );
}

export default App;
