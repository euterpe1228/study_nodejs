// import logo from './logo.svg';
import './App.css';
// import Headerobj from './headerobj';
import {useState} from 'react';

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>  
      {props.body}
    </article>
  );
}

function Hedear(props){
  return (
  <header>
    <h1>
      <a href='#' onClick={function(event){
        event.preventDefault();
        props.onChangeMode();
      }}>
        {props.title}
      </a>
    </h1>
  </header>
  );
}


function Nav(props){
  const lis = [];

  for (let item of props.topics){
    console.log('item :',item);
    lis.push(<li key={item.id}>
              <a id={item.id} href={'/read/'+item.id} onClick={event=>{
                event.preventDefault();
                props.onChangeMode(Number(event.target.id));
              }}>
                {item.title}
              </a> 
            </li>);
  }
  return (
  <nav>
    <ol>
      {lis}
    </ol>
  </nav>
  );
}


function App() {
  const [mode, setMode] = useState('Read');
  const [id, setId] = useState(null);
  
  const topics = [
    {id:1,title:'html', body:'html is ...' },
    {id:2,title:'css', body:'css is ...' },
    {id:3,title:'js', body:'js is ...' },
  ]
  let content = null;
  if(mode === 'Welcome'){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  }else if(mode === 'Read'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      console.log(topics[i].id ,id);
      if(topics[i].id===id){
        title= topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div>
    <Hedear title="REACT" onChangeMode={()=>{
      setMode('Welcome');
    }}></Hedear>
    <Nav topics={topics} onChangeMode={(_id)=>{
      setMode('Read');
      setId(_id);
    }}></Nav>
    {content}
    {/*  <Headerobj id='test1234'/> */ }
    <div>test</div>
    </div>
  );
}

export default App;
