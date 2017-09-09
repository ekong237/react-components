//
// var GroceryList = (props ) => (
//   <ul>
//     <Cucumbers />
//     <Kale />
//   </ul>
// );



//ReactDOM.render(<App />, document.getElementById("app"));

// Here we create a `TodoList` component
// var TodoList = (props) => (
//   <ul>
//     <li>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//     <li>{props.todos[2]}</li>
//   </ul>
// );

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
// Here we are creating an instance of the `TodoList` component
//   </div>
// );



// var TodoList = (props) => {
//
//   // This function will be called when the first `<li>` below is clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`
//
//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };
//
//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// }
//
// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
// Here we are creating an instance of the `TodoList` component
//   </div>
// );

// var GroceryListItem = (prop) => {
//
//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };
//
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{prop.groceryItems[0]} </li>
//       <li>{prop.groceryItems[1]} </li>
//       <li>{prop.groceryItems[2]} </li>
//     </ul>
//   );
// };
//
// var GroceryList = () => (
//   <div>
//     <h2>Grocery List</h2>
//     <GroceryListItem groceryItems={['cucumbers', 'kale', 'leafy']}/>
//   </div>
// );

// class GroceryListItem extends React.Component {
//   constructor(props){
//     super(props);
//
//   }
//
//   render() {
//     return (<li>{this.props.item}</li>);
//   }
// };
//
// var GroceryList = (props) => (
//   <ul>
//     {props.list.map(todo =>
//       <GroceryListItem item={todo} />
//     )}
//   </ul>
// );
//
// ReactDOM.render(<GroceryList list={['cucumbers','kale', 'leafy']}/>, document.getElementById("app"));

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }
  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  }
  render(){
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      //<li>{this.props.item}</li>;
      <li style={style} onMouseEnter={this.toggleHover.bind(this)}
                        onMouseLeave={this.toggleHover.bind(this)}>
      {this.props.item}</li>
    );
  }

}

// class instantiation
var GroceryList = (props) => (
  <ul>
    {props.list.map(todo =>
      <GroceryListItem item={todo} />
    )}
  </ul>
);

ReactDOM.render(
  <GroceryList list={['cucumbers','kale', 'leafy']}/>,
  document.getElementById("app")
);
//                                   these are required to have keys since its expecting a key val pair for props
// obj being passed in , is being copied into the class
// it creates the same keys, the keys are unique to the object
//
