import Message from './components/Message/Message';

const text = 'Текст, что был получен из пропса';

function App() {
  return (
    <div className="App">
      <Message text={'Здесь текст'} />
      <Message text={'text'} />
      <Message text={text} messageTo={true} />
    </div>
  );
}

export default App;
