import React, {memo} from 'react';

const Card = ({data, onClick}) => (
  <div className='rounded-lg shadow-lg mx-auto max-w-xs'>
    <div className='relative w-full p-1 md:p-2'>
      <img className="rounded-t-lg mx-auto min" src={data?.sprites?.front_default} alt=""/>
      <button onClick={onClick} className='after:absolute after:inset-0' > </button>
    </div>
    <div className="p-6 pt-0">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{data?.species.name}</h5>
    </div>
  </div>
);

export default memo(Card);