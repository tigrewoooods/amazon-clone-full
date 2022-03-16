import {Select, Button, Modal, Input} from 'antd'
import {ShoppingCartOutlined} from "@ant-design/icons";
import { useState } from 'react';
import { useMoralis } from 'react-moralis';

const {Option} = Select;
function Purchase({book}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [delivery, setDelivery] = useState("");
  const {Moralis, Native, account, chainId} = useMoralis();

  const handleOk = async () => {

    //Get token price on PancakeSwap v2 BSC
    const options = {
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      chain: "bsc",
      exchange: "PancakeSwapv2",
    };
    const price = await Moralis.Web3API.token.getTokenPrice(options);
    const priceBNB = book.price / price.usdPrice;
    
    // Send Matic to book store owenr address

    
    const options1 = {
      type: "native", 
      amount: Moralis.Units.ETH(priceBNB), 
      receiver: "0xf435247364F38e7f182372fbfF58E50f0A90E88F"
      
    }
    
    let result = await Moralis.transfer(options1);
    
    //Save Transaction Details to DB
    const Transaction = Moralis.Object.extend("Transaction");
    const transaction = new Transaction();


    transaction.set("Customer", account);
    transaction.set("Delivery", delivery);
    transaction.set("Product", book.name);
    transaction.set("Spent", book.price);

    transaction.save()
    setIsModalVisible(false);
  }

  return (
    <>
      <span className="price"> ${book.price}</span>
      <p>No Import Fees & Free Shipping Included</p>
      <h1 style={{ color: "green" }}> In Stock </h1>
      <h3>Quantity</h3>
      <Select defaultValue={1} style={{ width: "100%" }}>
        <Option value={1}>1</Option>
        <Option value={69}>69</Option>
        <Option value={420}>420</Option>
        <Option value={69420}>69420</Option>
      </Select>
      {chainId === "0x38" &&
      <Button
      className="login"
      style={{ width: "100%", marginTop: "50px" }}
      onClick={()=>setIsModalVisible(true)}
    >
      <ShoppingCartOutlined /> Buy Now
    </Button>
      }
      
      <Modal
        title="Purchase Product"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={()=>setIsModalVisible(false)}
      >
        <div style={{ display: "flex" }}>
          <img src={book.image} alt="product" style={{ width: "200px" }}></img>
          <div>
            <h3>{book.name}</h3>
            <h2>${book.price}</h2>
            <h4>Notes</h4>
            <Input onChange={(value) => setDelivery(value.target.value)}></Input>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Purchase