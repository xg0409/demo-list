import React from 'react';
import ReactDOM from 'react-dom';
// import {App,App2} from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import PropTypes from 'prop-types'

// ReactDOM.render(<App2 />, document.getElementById('root'));
// registerServiceWorker();


// const eleClass = "ele-lyt";
// const ele = <h1 className={eleClass}>Hello World!</h1>
// ReactDOM.render(ele,document.getElementById('root'));

/*function tick(){
  const ele = (
    <div>
      <h1>Hello World!</h1>
      <p>{new Date().getTime()}</p>
    </div>
  );
  ReactDOM.render(
    ele,
    document.getElementById('root')
  )
}

setInterval(tick,100);*/

/*function Welcome(props){
  return <h1>Hello,{props.name}</h1>
}

function WelcomeList(){
  return (
    <div>
      <Welcome name="XG"/>
      <Welcome name="XG2"/>
      <Welcome name="XG3"/>
    </div>
  )
}

ReactDOM.render(
  <WelcomeList/>,
  document.getElementById('root')
)*/


/*
// state
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = { date:new Date() };
  }
  render(){
    return (
      <div>
        <h1>Hello World!!!</h1>
        <p>{this.state.date.getTime()}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
)*/

/*
// React 生命周期
class Clock extends React.Component {
  constructor (props){
    super(props);
    this.state = { date:new Date() };
  }
  render(){
    return (
      <div>
        <h1>React 生命周期</h1>
        <h2>{this.state.date.getTime()}</h2>
      </div>
    );
  }
  componentDidMount(){
    console.log('componentDidMount')
    this.timer = setInterval(this.tick.bind(this),100);
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.timer)
  }
  tick(){
    this.setState({ date:new Date() })
  }
}


ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
)*/


/*
class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn:true};
    // this.handleClick = this.handleClick.bind(this); // 手动绑定
  }

  handleClick(){
    this.setState(prevState=>({
      isToggleOn:!prevState.isToggleOn
    }));
  }

  render(){
    return(
      <button onClick={this.handleClick.bind(this)}>
        {this.state.isToggleOn?'NO':'YES'}
      </button>
    )
  }
}

ReactDOM.render(<Toggle/>,document.getElementById('root'))*/

/*
class List extends React.Component {
  constructor(props){
    super(props);
  }
  // 默认值
  static defaultProps = {
    number:['a','b','c']
  }

   static propTypes = {
    number:PropTypes.array
  }

  render(){
    let list = this.props.number.map((number,index)=>(
      <li key={index}>{number}</li>
    ));
    return (
      <ul>{list}</ul>
    )
  }
}

ReactDOM.render(
  <List number={[1,2,3,4,5,6]}/>,
  document.getElementById('root')
)
*/
/*
class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue:''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  render (){
    return (
      <form>
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
      </form>
    )
  }
  handleInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
}
ReactDOM.render(
  <Form/>,
  document.getElementById('root')
)
*/

/*
const exchangeRate = 6.9339
const currency = {
  '$': '美元',
  '￥': '人民币'
}
class CurrencyInput extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  render () {
    return(
      <div>
        <label>
          {currency[this.props.currency]}：
          <input value={this.props.value} onChange={this.handleChange}/>
        </label>
      </div>
    )
  }
  handleChange (e) {
    this.props.onValueChange(e.target.value, this.props.currency) // 父级传递进来的回调函数
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { // 将共享状态存放在祖先元素上
      dollar: '',
      yuan: ''
    }
    this.valueChangeHandler = this.valueChangeHandler.bind(this)
  }
  render () {
    return( // 通过props向下传递共享状态和回调函数，很多情况下子组件共享的状态父级也需要用到
      <div>
        <CurrencyInput value={this.state.dollar} currency={'$'} onValueChange={this.valueChangeHandler}/>
        <CurrencyInput value={this.state.yuan} currency={'￥'} onValueChange={this.valueChangeHandler}/>
        <p>我们有{this.state.dollar}美元，也就是{this.state.yuan}元</p>
      </div>
    )
  }
  valueChangeHandler (value, type) {
    this.setState({
      dollar: type === '$' ? value : this.exchange(value, type),
      yuan: type === '￥' ? value : this.exchange(value, type)
    })
  }
  exchange (value, type) {
    return value * (type === '$' ? exchangeRate : 1 / exchangeRate)
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
*/

/*
function FancyBorder(props){
  return (
    <div className={'FancyBorder FancyBorder-'+props.color}>
      {props.children}
    </div>
  )
}

function WelcomeDialog(){
  return(
    <FancyBorder color="blue">
      <h1 className="dialog-title">Welcome</h1>
      <p className="dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  )
}

ReactDOM.render(
  <WelcomeDialog/>,
  document.getElementById('root')
)
*/

/*function SplitPane(props){
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
       <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  )
}

function App(){
  return <SplitPane left={<h1>LEFT</h1>} right={<h1>RIGHT</h1>}/> 
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)*/