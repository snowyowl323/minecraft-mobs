import './App.css';

import mobData from "./assets/mob-data.json";
import FilteredList from './components/FilteredList';

mobData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

const App = () => {
  return (
    <div>
      <h1>Minecraft Mob Viewer</h1>
      <FilteredList data={mobData} />
    </div>
  )
}

export default App;
