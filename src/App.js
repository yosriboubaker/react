import logo from './logo.svg';
import './App.css';
import image from './img/p1.jpg'
function App() {
  return (
   <section>
    <div style={{backgroundColor:"lightBlue",textAlign:"center"}}classNameName="shop-item">
    <img className="shop-item-image" src={image} />
    <h3 id='namep' className="shop-item-title">Whey CELL PRO</h3>
    <i id="lik" style={{fontSize:30}}className="fa fa-thumbs-up"></i>
    <div className="shop-item-details">
      <h4 id="prix" className="shop-item-price">200</h4>
     
      <div style={{width:70}} className="inc">
        <button style={{height:25}} id="plus">+</button>
        <p id="f" style={{marginTop:4}}>0</p>
        <button style={{height:25}} id="moins">-</button>


      </div>
    
      <button className="remove" type="button">
        Remove
      </button>
    </div>
  </div>
  </section> 
  );
}

export default App;
