import React from 'react';
import './index.css';


class CptBankItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

//   handleItemClick=()=> {
//     this.props.selectCallback(this.props.bankItem);
//   }

  handleItemClick = function(){
    this.props.selectCallback(this.props.bankItem);
  }

  render() {
    let {bankItem, selectItem} = this.props;
    return (
      <div className="cpt-bank-item" onClick={this.handleItemClick}>
        <div className="bank-icon"></div>
        <div className="bank-info">
            <div className="bank-name">{bankItem.bankName}</div>
            <div className="bank-desc">
                <span>储蓄卡</span>
                <span>尾号：12345</span>
            </div>
        </div>
        <div className={bankItem.idCard === selectItem.idCard?'select-icon select-yes':'select-icon select-no'}></div>
      </div>
    )
  }


}

export default CptBankItem;