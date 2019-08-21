
import SearchComponent from "../SearchBar/SearchComponent"

export default class ItemComponent extends React.Component {
    render() {
      return (
    
          <div>
              <ul>
                  <li>Mens</li>
                  <li>Women</li>
                  <li>Kids</li>                
                  <li>New Arrrvals</li>
                  <li>Sale</li>
                  <li><SearchComponent /></li>

              </ul>
          </div>        
      );
    }
  };

