import React from 'react'

const Home = () => {
  return (
    <div>
      <img src="/banner1.png" class="img-fluid w-100 m-1" alt="..." />
      <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
        <div class="col">
          <div class="card">
            <img src="/biryani.jpg" height={300} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title fw-bold">Chicken Biryani</h5>
              <p class="card-text">Chicken Biryani is a flavorful and aromatic South Asian dish that blends tender chicken, fragrant basmati rice, and a medley of spices like saffron, cardamom, and cloves. Often garnished with fried onions, cilantro, and boiled eggs, this one-pot delight is a culinary masterpiece enjoyed for its rich taste and irresistible aroma. Perfect for any feast!.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="/gulub.jpg" 
           height={300} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title fw-bold">Gulub Jamun</h5>
              <p class="card-text">Gulab Jamun is a beloved Indian dessert made from khoya (milk solids) or milk powder dough, deep-fried to golden perfection. These soft, spongy balls are then soaked in a fragrant sugar syrup infused with cardamom, rose water, and saffron. The result is a delectable treat that's sweet, rich, and enjoyed at festive occasions and celebrations.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="/meals.jpg" height={300} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title fw-bold">Meals</h5>
              <p class="card-text">Meals are essential parts of the day, providing nourishment and energy. Breakfast kick-starts your morning with vital nutrients, lunch replenishes your midday energy, and dinner offers a satisfying conclusion to the day. Each meal can vary widely in cuisine and ingredients, reflecting cultural diversity and personal preferences, making mealtime a delightful.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="/vegbiryani.jpg" height={300} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title fw-bold">Veg Biryani</h5>
              <p class="card-text">Veg Biryani is a delightful and aromatic Indian dish that showcases a medley of fresh vegetables like carrots, peas, and potatoes, layered with fragrant basmati rice and infused with spices such as saffron, cumin, and garam masala. Often garnished with fried onions and mint, this colorful one-pot wonder offers a satisfying and wholesome vegetarian feast.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
