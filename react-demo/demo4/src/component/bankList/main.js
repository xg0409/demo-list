import React from 'react';
import './index.css';
import CptBankItem from './item';


class CptBankList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectItem:props.selectItem
    };
  }

  selectCallback = (bankInfo) =>{
    this.setState({
      selectItem:bankInfo
    });
  }

  // 组件已存在时的状态改变
  componentDidUpdate(){
     this.props.selectCallBack(this.state.selectItem);
  }

  render() {
    console.log('to render');
    let that = this;
    let { selectItem } = this.state;
    var bankItemList = this.props.bankList.map(function(item){
      return (
         <CptBankItem key={item.idCard} bankItem={item} selectItem={selectItem} selectCallback={that.selectCallback}/>
      )
    });

    return (
      <div className="cpt-bank-list">
        {bankItemList}
      </div>
    );
  }


}

export default CptBankList;