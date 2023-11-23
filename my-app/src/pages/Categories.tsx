import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getCategories } from '../data/api';
import { Link } from 'react-router-dom';
type CategorieT = {
  name: string,
  id: string,
}
const Categories: React.FC = () => {
  const [data, setData] = useState<CategorieT[]>([]);
  useEffect(() => {
    setData(getCategories())
  }, [])
  return (
    <div className=' w-[80vw] ml-auto mr-auto'>
      <Navbar />
      <h1 className="text-[30px] py-4">Session Categories</h1>
      <div className='flex flex-col justify-center md:grid md:grid-rows-3 md:grid-cols-3'>
        {
          data.map((item, indexItem) => (
            <div key={indexItem} className=' w-56 h-auto p-1  rounded-md hover:bg-slate-100 cursor-pointer m-1'>
              <Link to={'/oneCategory/' + item.id}>{item.id}</Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default Categories;
