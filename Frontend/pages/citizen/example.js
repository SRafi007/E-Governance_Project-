import axios from 'axios';
export default function example({ data }) {
    
    return (
        <>
        <h1>This SSR request!</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>
             <p>Name: {item.name}</p> 
           
              </li>
          ))}
        </ul>
      </>
    );
    }
    
   export async function getServerSideProps() {
   
        const response = await axios.get('http://localhost:3000/citizen');
        const data = await response.data;
      
    return { props: { data } }
    }