import React from 'react'
import { FreeMinting as FreeMintingController } from '../../components/FreeMinting';
import { MyNavBar } from "../../components/MyNavBar";
import { Footer } from '../../components/Footer';

const Minting = (props: any) => {
  return (
    <div style={{background: 'white'}}>
      <MyNavBar />
      <FreeMintingController />
      <Footer />
    </div>
  )
}

export default Minting