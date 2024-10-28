import './App.css'
import { Card } from './Components/card'

import bgChanger from './assets/bgChanger.svg';
import counter from './assets/counter.jpg';
import DarkMode from './assets/Dark-Mode-Pillar.png';
import passGenerator from './assets/passwordGenerator.jpeg';
import todo from './assets/todo.webp';
import Counter from './pages/Counter';
import Bgchanger from './pages/Bgchanger';
import Passwordgenerator from './pages/Passwordgenerator';
import Ecommerce from './pages/Ecommerce';

function App() {
  // bg-[#6625FC]
  const cardArr = [
    {
      id: 1,
      title: "Todo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel provident recusandae voluptate.",
      img: todo,
      link: "/todo"
    },
    {
      id: 2,
      title: "Counter",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel provident recusandae voluptate.",
      img: counter,
      link: "/counter"
    },
    {
      id: 3,
      title: "Background Changer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel provident recusandae voluptate.",
      img: bgChanger,
      link: "/bgchanger"
    },
    {
      id: 4,
      title: "Password Generator",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel provident recusandae voluptate.",
      img: passGenerator,
      link: "/passwordgenerator"
    },
    {
      id: 5,
      title: "Theme Switcher",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel provident recusandae voluptate.",
      img: DarkMode,
      link: "/themeswitcher"
    }
  ]
  return (
    <>
      <h1 className='pt-3 text-4xl h-10 font-bold flex justify-center align-middle bg-white'>My Project</h1>
      <div className='bg-white'>
        {
          cardArr.map((item, index) => {
            return (
              <Card item = {item} key = {index} rd={12}/>
            )
          })
        }
      </div>
      
    </>
  )
}

export default App
