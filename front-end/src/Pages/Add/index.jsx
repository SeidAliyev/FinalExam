import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setHelp,deleteHelp,postHelp } from '../../Redux/Features/helpSlicer'
import { useEffect } from 'react'
import axios from 'axios'
import { useRef } from 'react'
import { Helmet } from 'react-helmet'

const Add = () => {

  const help = useSelector((state) => state.helps.help)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("http://localhost:5000/api/help").then((res)=>dispatch(setHelp(res.data)))
  }, [])

  function deleting(id){
    axios.delete(`http://localhost:5000/api/help/${id}`)
  }

  const title = useRef()
  const content = useRef()
  const image = useRef()
  
  function posting(){
    let obj={
      title:title.current.value,
      content:content.current.value,
      image:image.current.value
    }

    axios.post('http://localhost:5000/api/help',obj)

    dispatch(postHelp(obj))

    title.current.value = ''
    content.current.value = ''
    image.current.value = ''
  }



  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Admin</title>
            </Helmet>
  {/* component */}
  <div className="flex flex-col">
    <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-200 border-b">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  image
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Content
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Handle
                </th>
              </tr>
            </thead>
            <tbody>
            {help&&help.map((elem,index)=>{
              
              return(
                <tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <img width={100} src={elem.image} alt="" />
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {elem.title}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {elem.content}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <button onClick={()=>{deleting(elem._id),dispatch(deleteHelp(elem))}} className="text-sm text-blue-600 -mb-2">Delete</button>
                </td>
              </tr>
              )
            })
          }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


  <>
  {/* component */}
  <form onSubmit={(e)=>{e.preventDefault(),posting()}}>
    <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
      <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
        <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">
          ADD POST
        </h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="text-lx font-serif">
              Title:
            </label>
            <input
            ref={title}
              type="text"
              placeholder="title"
              id="title"
              className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-lg font-serif"
            >
              Content:
            </label>
            <textarea
              ref={content}
              id="description"
              cols={20}
              rows={5}
              placeholder="whrite here.."
              className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
              defaultValue={""}
            />
          </div>
          <div>
            <label htmlFor="name" className="text-lx font-serif">
              image
            </label>
            <input
            ref={image}
              type="text"
              placeholder="name"
              id="name"
              className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
            />
          </div>
          <button type='submit' className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">
            ADD POST
          </button>
        </div>
      </div>
    </div>
  </form>
</>

</>

  )
}

export default Add