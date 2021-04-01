import SideMenu from './components/side-menu/side-menu';
import Header from './components/header/header';
import DataCardSmall from './components/data-cards/data-card-small/data-small-card';
import DataCardBig from "./components/data-cards/data-card-big/data-big-card";
import './App.css';

function App() {
  return (
    <div className='App'>
      <div id='wrapper'>
        <SideMenu/>
        <div id='content-wrapper' class='d-flex flex-column'>
          <div id='content'>
            <Header/>
          </div>
          <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <div class="row">
              <DataCardSmall title= 'Products in Data Base' value='13' icon='fa-clipboard-list' color= 'primary'/>
              <DataCardSmall title= 'Amount in products' value='$ 23000' icon='fa-dollar-sign' color= 'success'/>
              <DataCardSmall title= 'Users quantity' value='20' icon='fa-user-check' color= 'warning'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
