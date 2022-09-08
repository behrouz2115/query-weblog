import './App.css';
import { gql, useQuery } from '@apollo/client';

const QUERY = gql `
    query {
      authors {field}
    }
`;

function App() {
  const { loading, data } = useQuery(QUERY);
  console.log(data)
  return (
    <div className="App">
       app
    </div>
  );
}

export default App;
