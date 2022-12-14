import { contentBis } from ".";

export default function menu() {
  const menuContainer = document.createElement("div");
  contentBis.appendChild(menuContainer);
  return (menuContainer.innerHTML = `
  <div class="menu-container">
      <h1 class="menuTitle">Our Menu</h1>
  <div class="entries">
      <h2>Entries</h2>
        <div class="food-entrie">
            <img src="../src/Icon/pexels-abhinav-goswami-291528.jpg" alt="">
            <p>Chocolate Delirium</p>
            <p>$8</p>
        </div>
        <div class="food-entrie">
            <img src="../src/Icon/pexels-ella-olsson-3026810.jpg" alt="">
            <p>Chocolate Verrine</p>
            <p>$12</p>
        </div>
        <div class="food-entrie">
            <img src="../src/Icon/pexels-suzy-hazelwood-1098592.jpg" alt="">
            <p>Lemon Cheese</p>
            <p>$12</p>
        </div>
      </div>
      </div>
      `);
  return menuContainer.innerHTML;
  //   });
}
//       <div class="main">
//       <h2>Mains</h2>
//       <p>Beinjing Duck</p>
//       <p>Thiebou Jën</p>
//       <p>Sea Linguini</p>
//       <p>Wagyu Burger</p>
//   </div>
//   <div class="dessert">
//       <h2>Dessert</h2>
//       <p>Tiramisu</p>
//       <p>Crème brulée</p>
//       <p>Renversée à l'ananas</p>
//       <p>Triple feuille</p>
//       </div>
//       <div class="drink">
//       <h2>Drinks</h2>
//       <p>Bissap Ananas</p>
//       <p>Bouye Mentholée</p>
//       <p>Ditakh Nature</p>
//       <p>Bissap Caucasien</p>
    //   <p>Caesar's Salad</p>
    //   <p>Tofu Jerk Salad</p>
    //   <p>Honey Dipped Prawns</p>
    //   <p>Fish Soup</p>
