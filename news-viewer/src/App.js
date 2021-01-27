// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState(null);
//   // const onClick = () => {
//   //   axios
//   //     .get('https://jsonplaceholder.typicode.com/todos/1')
//   //     .then((response) => {
//   //       setData(response.data);
//   //     });
//   // };
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/todos/1',
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         ></textarea>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=98dba33db3ae471b8b17fbd98b220bda',
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && (
//         <textarea rows={7} value={JSON.stringify(data, null, 2)}></textarea>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useCallback, useState } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category}></NewsList>
    </>
  );
};

export default App;
