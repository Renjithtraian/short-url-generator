
import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Item from './components/Item'

function App() {

  const [urls,setUrls] = useState([]);

  const fetchUrl = async(link) => {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
    const data = await response.json()
    setUrls((prevUrls) => (
      [data.result,...prevUrls]
    ))
    console.log(data);
  }

  const handleDelete = (id) => {
    const deletedItems = urls.filter((lists) => (
      lists.code !== id
    ))
    setUrls(deletedItems)
  }

  return (
    <>
      <main className='bg-slate-200 min-h-screen '>
        <section className='w-full max-w-screen-md mx-auto'>
          <header>
            <h1 className='text-center text-3xl py-6 font-bold'>SHORTIFY</h1>
          </header>
          <Form fetchUrl={fetchUrl}/>
          {
            urls.map((dataList) => {
              return <Item key={dataList.code} handleDelete={handleDelete} dataList={dataList}/>
            })
          }
        </section>
      </main>
    </>
  )
}

export default App
