import React, {useEffect, useState, memo} from 'react';
import axios from "axios";
import Card from "../components/Card";
import Loading from "../components/Loading";
import ModalDetail from "../components/ModalDetail";

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false )
  const [pokemons, setPokemons] = useState([])
  const [detailPokemon, setDetailPokemon] = useState({})
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=15')

  const handleClickCard = (item) => {
    setDetailPokemon(item)
    setShowModal(!showModal)
  }

  const getPokemons = (items) => {
    items.forEach(async (item) => {
      const response = await axios.get(item.url)
      const {data} = response
      setPokemons(currentList => [...currentList, data])
    })
  }

  const getData = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(loadMore)

      const {data} = response

      getPokemons(data?.results)
      setLoadMore(data.next)

      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className='container text-center mx-auto'>
      <div className="grid grid-cols-3 gap-3 text-center ">
        {pokemons.map((pokemon, idx) => (
          <div key={idx} className='w-full'>
            <Card
              data={pokemon}
              onClick={() => handleClickCard(pokemon)}
            />
          </div>
        ))}
      </div>
      <Loading isLoading={isLoading}/>
      <div className="py-6">
        <button
          className='px-2 py-1 bg-amber-600 rounded text-white text-xl'
          onClick={() => getData()}
        >Load More</button>
      </div>
      {showModal && (
        <ModalDetail
          toggle={() => setShowModal(!showModal)}
          data={detailPokemon}
        />
      )}
    </section>
  );
}

export default memo(Home);