import person from './data/person';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyCard from './MyCard'
import Stack from 'react-bootstrap/Stack';

function App() {

  return (
    <div className="App">
         <Stack gap={2} className="col-md-5 mx-auto">
     {person.map((oneItem,index)=><MyCard inp={oneItem} key={index}></MyCard>)}
     </Stack>

    </div>
  );
}

export default App;
