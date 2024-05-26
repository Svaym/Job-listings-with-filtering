import Button from "../Button/Button"
import data from "./data"
import { useState } from "react"
import Search from "../Search/Search"

export default function Job() {
  // Выбор фильтра
  const [selectedDirection, setSelectedDirection] = useState('')
  //  Ввод вакансии
  const [text, setText] = useState('')
  //  Фильтрация
  const [filters, setFilters] = useState([])
  // Появления блока фильтрации
  const [click, setClick] = useState(false)
  //  Фильтрация вакансий
  // const filteredJobs = selectedDirection
  //   ? data.filter(job => job.direction === selectedDirection)
  //   : jobList;
  //  Поискковик
  function searchVacancy() {
    setText('')
  }
  //  Удаление фильтров по клику
  function removeFilters(title) {
    setFilters(filters.filter(filter => filter.title !== title));
  }
  //  Удаление всех фильтров по клику
  function removeAllFilters() {
    setFilters([])
  }
  function addFilters(title) {
    setClick(true)
    setFilters([...filters, {title: title}])
  }
  return (
    <>
      <section className="">
        <div className="container">
          <Search position={'absolute top-20 left-1/2 -translate-x-1/2'} value={text} onClick={searchVacancy} onChange={(e) => setText(e.target.value)} />
          {click &&
            <div className="w-full bg-white shadow-xl rounded-md h-20 relative -top-8 flex items-center justify-between p-4 animate-in slide-in-from-left duration-500">
              <div className={filters.length>=9 ? 'flex gap-x-3 overflow-x-auto w-[90%]' : 'flex gap-x-3 w-[95%]'}>
              {filters.map((i) => (
                <>
                  <div className="flex items-center">
                    <span className="rounded-l-md p-2 text-darkCyan bg-lightCyan">{i.title.el}</span>
                    <button onClick={() => removeFilters(i.title)} className="p-[13px] bg-darkCyan rounded-r-md transition-colors duration-300 ease-linear hover:bg-veryDarkCyan">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
                    </button>
                  </div>
                </>
              ))}
              </div>
              <h3 onClick={() => removeAllFilters()} className="cursor-pointer text-darkCyan relative transition-all duration-300 ease-in-out after:content-[''] after:h-[2px] after:w-0 after:bg-darkCyan after:block after:left-0 after:absolute hover:after:-bottom-[0.5px] hover:after:w-full hover:after:animate-fade">Clear</h3>
            </div>
          }
          <div className="flex flex-col gap-y-8 my-12 animate-in slide-in-from-top-16 duration-700">
            {/* {data.filter((item) => {
              if (text === '') {
                return item
              } else if (item.position.toLowerCase().includes(text.toLowerCase())) {
                return item
              }
              }).map((item, id) => (
              <>
                <div className={id===0 || id===1 ? "flex items-center justify-between rounded-md px-7 py-5 bg-white relative after:block after:absolute after:w-2 after:h-full after:left-0 after:bg-darkCyan shadow-xl" : "flex items-center justify-between rounded-md px-7 py-5 bg-white shadow-xl"}>
                  <div className="flex items-center gap-x-5">
                    <img src={item.logo} alt="logo" />
                    <div className="flex flex-col gap-y-2">
                      <div className="flex items-center gap-x-5">
                        <h2 className="text-darkCyan">{item.company}</h2>
                        <div className="flex gap-x-2">
                          {item.new && <span className="text-lightCyan px-2 pt-2 pb-1 rounded-full bg-darkCyan font-bold">NEW!</span>}
                          {item.featured && <span className="text-lightCyan px-2 pt-2 pb-1 rounded-full bg-veryDarkCyan font-bold">FEATURED</span>}
                        </div>
                      </div>
                      <h1 className="text-2xl font-bold">{item.position}</h1>
                      <div className="flex items-center gap-x-3 text-darkGrayishCyan ">
                        <h3>{item.postedAt}</h3>
                        <div className="w-1 h-1 rounded-full bg-darkGrayishCyan"></div>
                        <h3>{item.contract}</h3>
                        <div className="w-1 h-1 rounded-full bg-darkGrayishCyan"></div>
                        <h3>{item.location}</h3>
                      </div>
                    </div>
                  </div>
                    <div className="flex gap-x-3">{item.languages.map((el) => (
                      <>
                        <Button onClick={() => addFilters({el})} cursorPointer='cursor-pointer'>{el}</Button>
                      </>
                      ))}
                    </div>
                </div>
              </>
            ))} */}
            {data.filter((item) => {
              if (text === '') {
                return item
              } else if (item.position.toLowerCase().includes(text.toLowerCase())) {
                return item
              }
              }).map((item, id) => (
              <>
                <div className={id===0 || id===1 ? "flex items-center justify-between rounded-md px-7 py-5 bg-white relative after:block after:absolute after:w-2 after:h-full after:left-0 after:bg-darkCyan shadow-xl" : "flex items-center justify-between rounded-md px-7 py-5 bg-white shadow-xl"}>
                  <div className="flex items-center gap-x-5">
                    <img src={item.logo} alt="logo" />
                    <div className="flex flex-col gap-y-2">
                      <div className="flex items-center gap-x-5">
                        <h2 className="text-darkCyan">{item.company}</h2>
                        <div className="flex gap-x-2">
                          {item.new && <span className="text-lightCyan px-2 pt-2 pb-1 rounded-full bg-darkCyan font-bold">NEW!</span>}
                          {item.featured && <span className="text-lightCyan px-2 pt-2 pb-1 rounded-full bg-veryDarkCyan font-bold">FEATURED</span>}
                        </div>
                      </div>
                      <h1 className="text-2xl font-bold">{item.position}</h1>
                      <div className="flex items-center gap-x-3 text-darkGrayishCyan ">
                        <h3>{item.postedAt}</h3>
                        <div className="w-1 h-1 rounded-full bg-darkGrayishCyan"></div>
                        <h3>{item.contract}</h3>
                        <div className="w-1 h-1 rounded-full bg-darkGrayishCyan"></div>
                        <h3>{item.location}</h3>
                      </div>
                    </div>
                  </div>
                    <div className="flex gap-x-3">{item.languages.map((el) => (
                      <>
                        <Button onClick={() => addFilters({el})} cursorPointer='cursor-pointer'>{el}</Button>
                      </>
                      ))}
                    </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
