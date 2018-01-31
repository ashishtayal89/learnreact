import React from 'react';
import { render } from 'react-dom';
import './stylesheets/ui.scss';
import Start from './components/Practice/Start';

window.React = React;
render(<Start/>,document.getElementById('react-container1'));

// var table = <Table days={
// 	[
// 		{
// 			resort: "Squaw Valley",
// 			date: new Date("1/2/2016"),
// 			powder: true,
// 			backcountry: false
// 		},
// 		{
// 			resort: "Kirkwood",
// 			date: new Date("3/28/2016"),
// 			powder: false,
// 			backcountry: false
// 		},
// 		{
// 			resort: "Mt. Tallac",
// 			date: new Date("4/2/2016"),
// 			powder: false,
// 			backcountry: true
// 		}
// 	]
// }/>;

//render(table,document.getElementById('react-container1'));

// var pureTable = <PureTable/>

// console.log(table.type.prototype.constructor);
// console.log(pureTable.type.prototype.constructor);
// console.log(table);
// console.log(pureTable);
// console.log(<div class="yellow">
// 	<a href="google.com"></a>
// </div>);



//console.log(table);
// console.log(<div class="yellow">
// 	<a href="google.com"></a>
// </div>);

// render(
// 	<Table days={
// 		[
// 			{
// 				resort: "Squaw Valley",
// 				date: new Date("1/2/2016"),
// 				powder: true,
// 				backcountry: false
// 			},
// 			{
// 				resort: "Kirkwood",
// 				date: new Date("3/28/2016"),
// 				powder: false,
// 				backcountry: false
// 			},
// 			{
// 				resort: "Mt. Tallac",
// 				date: new Date("4/2/2016"),
// 				powder: false,
// 				backcountry: true
// 			}
// 		]
// 	}/>,
// 	document.getElementById('react-container1')
// )
