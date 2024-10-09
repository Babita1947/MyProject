import './App.css'
import { Card } from './Components/card'

import bgChanger from './assets/bgChanger.svg';
import counter from './assets/counter.jpg';
import DarkMode from './assets/Dark-Mode-Pillar.png';
import passGenerator from './assets/passwordGenerator.jpeg';
import todo from './assets/todo.webp';
import Counter from './pages/Counter';

function App() {
  // bg-[#6625FC]
  const cardArr = [
    {
      id: 1,
      title: "Todo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel provident recusandae voluptate.",
      img: todo,
      link: ""
    },
    {
      id: 2,
      title: "Counter",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel provident recusandae voluptate.",
      img: counter,
      link: ""
    },
    {
      id: 3,
      title: "Background Changer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel provident recusandae voluptate.",
      img: bgChanger,
      link: ""
    },
    {
      id: 4,
      title: "Password Generator",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel provident recusandae voluptate.",
      img: passGenerator,
      link: ""
    },
    {
      id: 5,
      title: "Theme Switcher",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel provident recusandae voluptate.",
      img: DarkMode,
      link: ""
    }
  ]
  return (
    <>
      {/* <h1 className='mt-3 text-4xl h-10 font-bold flex justify-center align-middle'>My Project</h1>
      <div>
        {
          cardArr.map((item, index) => {
            return (
              <Card item = {item} key = {index} rd={12}/>
            )
          })
        }
      </div> */}
      <Counter/>
      
    </>
  )
}

export default App
