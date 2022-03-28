import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import Navbar from '../Navbar/Navbar';


export default function Mensagem() {
    return (
      <><Navbar></Navbar><ChatEngine
        height="100vh"
        projectID={"5ce05a0e-7c30-413f-ba1f-6904bdf1be03"}
        userName="Medeiros"
        userSecret="123456" /></>
    )
  }