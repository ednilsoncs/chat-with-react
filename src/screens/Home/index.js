import React, { useEffect, useState } from 'react';
import { ws } from '../../services';
import logo from '../../assets/images/logo.svg';

ws.connect();
ws.on('open', () => {
  // setConnect(true);
});
const chat = ws.subscribe('chat');
function App() {
  const [isConnect, setConnect] = useState(false);
  const [message, setMessage] = useState('');
  const [listMessage, setListMensage] = useState([]);
  useEffect(() => {
    loadingMensagem();
  }, []);
  const loadingMensagem = async () => {
    await chat.on('message', (data) => {
      const list = listMessage;
      list.push(data.text);
    });
  };
  const sendMensage = (e) => {
    e.preventDefault();
    chat.emit('message', { text: message });
    loadingMensagem();
  };
  return (
    <div id="login-screen" className="hero column is-fullheight">
      <div className="container">
        <div>

          {listMessage.map((item) => <><text>{item}</text><br /></>)}
        </div>
        <form onSubmit={(e) => { sendMensage(e); setMessage(''); }}>
          <textarea
            id="ta"
            name="textarea"
            value={message}
            onChange={(e) => (setMessage(e.target.value))}
          />
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default App;
