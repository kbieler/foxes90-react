import {useState, useContext} from 'react';
import axios from 'axios';

let Shop = () => {
    
    let getMagicItem = async () => {
        let data = await axios.get('https://www.dnd5eapi.co/api/magic-items');
        return data.status === 200 ? data.data : null;
    }

    loadMagicItem = async () => {
        let data = await getMagicItem();
        setMagicItem(data.MagicItem);
    }

    const [magicitem, setMagicItem] = useState(()=> {loadMagicItem();});
    
    return(
        <div className="container">
            <div className="row justify-content-center">
                <h1>Shop for Magical Items</h1>
            </div>
            <div className="row justify-content-center">
            <table className="table table-sm">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Rarity</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{magicitem.name}</th>
      <td>{magicitem.equipment_category.name}</td>
      <td>{magicitem.rarity.name}</td>
      <td>{magicitem.desc}</td>
    </tr>
    
  </tbody>
</table>
            </div>
        </div>
    )
}


export default Shop;