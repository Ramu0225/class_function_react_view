
import './App.css';
import Clock from './components/functionalComponents/clockFunction';


function App() {
  return (
		<div className="App">
			<Clock date={new Date().toLocaleTimeString()} />
		</div>
	);
}

export default App;
