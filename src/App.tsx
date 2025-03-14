import { useState } from 'react'
import './App.css'
import { generateQR } from './services/generateQrcode'

function App() {

  const [url, setUrl] = useState<string>('')
  const [qrcode, setQrcode] = useState<string>('')
  const generate = async (e) => {
    e.preventDefault()
    const qr = await generateQR(url) || '';
    setQrcode(qr);
    console.log(qr)
  }

  return(
    <div className='app-container'>
     <form onSubmit={generate}>
      <h1 className='app-title'>Generate QR Code</h1>
        <input type="text" placeholder='Write Url...' onChange={(e) => {
          setUrl(e.target.value)
        }}/>
        <button>Generate</button>
        <div className='qrcode-container'>
          {qrcode && <img src={qrcode} alt="qrcode" />}
        </div>
     </form>
    </div>
  )
}

export default App
