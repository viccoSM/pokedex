import React, {Fragment} from 'react';

const Table = ({items = []}) => (
  <div className='w-full grid grid-cols-3 text-start break-all gap-y-2'>
    {items?.map((item, idx) => (
      <Fragment key={idx}>
        <div className="col-span-1">
          {item.title}
        </div>
        <div className="col-span-2">{item.value}</div>
      </Fragment>
    ))}
  </div>
)

const ModalDetail = ({toggle, data}) => (
  <div
    className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
    <div className="relative w-auto md:w-[400px] my-6 mx-auto max-w-3xl">
      <div
        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <div className="flex items-start justify-between p-3 border-solid border-gray-300 rounded-t ">
          <h2>Detail Pokemon</h2>
          <button
            className="bg-transparent px-3 border-0 text-black float-right"
            onClick={toggle}
          >
            <h2>x</h2>
          </button>
        </div>
        <div className="p-3">
          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <img className="rounded-t-lg mx-auto" src={data?.sprites?.front_default} alt=""/>
            </div>
            <div className="col-span-2">
              <Table
                items={[
                  {title: 'Name', value: data?.species.name},
                  {title: 'Type', value: data?.types.map(({type}) => ' ' + type.name).toString()},
                ]}
              />
            </div>
          </div>
          <Table
            items={[
              {
                title: 'Abilities',
                value: data?.abilities.map(({ability}) => ' ' + ability.name).toString()
              }
            ]}
          />

          <Table
            items={data?.stats.map((item) => ({title: item.stat.name, value: item.base_stat}))}
          />
        </div>
      </div>
    </div>
  </div>
);

export default ModalDetail;