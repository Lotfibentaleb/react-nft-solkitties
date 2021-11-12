import React from 'react'
import { Minting as MintingController } from '../../components/Minting';
import { MyNavBar } from "../../components/MyNavBar";
import { Footer } from '../../components/Footer';

const Minting = (props: any) => {
  return (
    <div style={{background: 'white'}}>
      <MyNavBar />
      <MintingController />
      <Footer />
    </div>
  )
}

export default Minting