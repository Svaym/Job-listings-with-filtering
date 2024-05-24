import Button from "../Button/Button"
import data from "./data"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"

export default function Job() {
  //  Фильтрация
  const [filters, setFilters] = useState([])
  // Появления блока фильтрации
  const [click, setClick] = useState(false)
  const search = useSelector(state => state.positions.value)
  const dispatch = useDispatch()
  function searchPosition(event) {
    dispatch({type: 'SEARCH_POSITION', payload: event.target.position})
  }
  function removeFilters(id) {
    setFilters(filters.filter((_, index) => index !== id))
  }
  function addFilters(title) {
    setClick(true)
    setFilters([...filters, {title: title}])
    console.log(filters)
    console.log(filters.includes(title.el))
  }
  return (
    <>
      <section className="">
        <div className="container">
          {click &&
            <div className="w-full bg-white shadow-xl rounded-md h-20 relative -top-8 flex items-center justify-between p-4 animate-in slide-in-from-left duration-500">
              <div className={filters.length>=9 ? 'flex gap-x-3 overflow-x-auto w-[90%]' : 'flex gap-x-3 w-[95%]'}>
              {filters.map((i) => (
                <>
                  <div className="flex items-center">
                    <Button onClick={() => setFilters(filters.id)}>{i.title.el}</Button>
                    <button className="p-[13px] bg-darkCyan rounded-md transition-colors duration-300 ease-linear hover:bg-veryDarkCyan">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
                    </button>
                  </div>
                </>
              ))}
              </div>
              <h3 className="cursor-pointer text-darkCyan relative transition-all duration-300 ease-in-out after:content-[''] after:h-[2px] after:w-0 after:bg-darkCyan after:block after:left-0 after:absolute hover:after:-bottom-[0.5px] hover:after:w-full hover:after:animate-fade">Clear</h3>
            </div>
          }
          <div className="flex flex-col gap-y-8 my-12 animate-in slide-in-from-top-16 duration-700">
            {data.map((item, id) => (
              <>
                <div className={id===0 || id===1 ? "flex items-center justify-between rounded-md px-7 py-5 bg-white relative after:block after:absolute after:w-2 after:h-full after:left-0 after:bg-darkCyan shadow-xl" : "flex items-center justify-between rounded-md px-7 py-5 bg-white shadow-xl"}>
                  <div className="flex items-center gap-x-5">
                    <img src={item.logo} alt="logo" />
                    <div>
                      <h2 className="text-darkCyan">{item.company}</h2>
                      <h1 className="text-2xl font-bold">{item.position}</h1>
                      <h2>{item.role}</h2>
                    </div>
                  </div>
                  <div className="flex gap-x-2">{item.languages.map((el) => (
                    <>
                      <Button onClick={() => addFilters({el})} cursorPointer='cursor-pointer'>{el}</Button>
                    </>
                    ))}
                  </div>
                </div>
              </>
            ))}


            {/*  Пробую сделать поисковик */}
            {/* <input type="text" />
            <button onClick={() => searchPosition(event)}>ads</button>
            {data.map((item, id) => (
              <>
                <div className={id===0 || id===1 ? "flex items-center justify-between rounded-md px-7 py-5 bg-white relative after:block after:absolute after:w-2 after:h-full after:left-0 after:bg-darkCyan shadow-xl" : "flex items-center justify-between rounded-md px-7 py-5 bg-white shadow-xl"}>
                  <h2>{item.position}</h2>
                </div>
              </>
            ))} */}
          </div>
        </div>
      </section>
    </>
  )
}
