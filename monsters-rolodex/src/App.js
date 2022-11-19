import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>JAMIL</p>
// 				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [
				{
					name: 'Linda',
					id: 1,
				},
				{
					name: 'Frank',
					id: 2,
				},
				{
					name: 'Jamil',
					id: 3,
				},
			],
		};
	}
	render() {
		return (
			<div className="App">
				{this.state.monsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
