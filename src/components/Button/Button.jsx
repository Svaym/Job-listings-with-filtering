export default function Button({ children, cursorPointer, onClick }) {
  return (
    <button onClick={onClick} className={`rounded-md p-2 pb-1 ${cursorPointer} text-darkCyan bg-lightCyan transition-colors duration-200 ease-linear hover:bg-darkCyan hover:text-lightCyan`}>{ children }</button>
  )
}
