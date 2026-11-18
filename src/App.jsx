import Card from './components/Card'

const App = () => {
  const cakes = [
    {
      image: "https://i.pinimg.com/736x/e1/a3/9b/e1a39b07ff75e5264cede3e036a33557.jpg",
      name: "Chocolate Truffle Cake",
      price: 650,
      description: "Rich chocolate cake layered with smooth chocolate ganache."
    },
    {
      image: "https://i.pinimg.com/736x/a3/a1/13/a3a113f06405982ce996486b31276840.jpg",
      name: "Black Forest Cake",
      price: 550,
      description: "Soft chocolate sponge layered with whipped cream and cherries."
    },
    {
      image: "https://i.pinimg.com/736x/db/12/d4/db12d4f7221810b3e6ee4511ccda13dd.jpg",
      name: "Red Velvet Cake",
      price: 750,
      description: "Moist red velvet sponge with creamy cheese frosting."
    },
    {
      image: "https://i.pinimg.com/736x/d6/a6/6c/d6a66c5ba15db5a587e142a33be69613.jpg",
      name: "Vanilla Cream Cake",
      price: 450,
      description: "Light vanilla sponge topped with fresh whipped cream."
    },
    {
      image: "https://i.pinimg.com/736x/7f/78/d1/7f78d12a20d95c35280609edeeedb0ff.jpg",
      name: "Butterscotch Cake",
      price: 550,
      description: "Delicious butterscotch cake with crunchy caramel bits."
    },
    {
      image: "https://i.pinimg.com/736x/97/45/af/9745af2bd7d4406ceeb2fd2878dc963d.jpg",
      name: "Strawberry Cake",
      price: 600,
      description: "Fluffy sponge cake filled with fresh strawberry cream."
    },
    {
      image: "https://i.pinimg.com/736x/ad/b8/70/adb870284a5305c4cd6d30ddaa9b1561.jpg",
      name: "Pineapple Cake",
      price: 500,
      description: "Classic vanilla cake with juicy pineapple chunks and cream."
    },
    {
      image: "https://i.pinimg.com/1200x/0f/e0/13/0fe013bff6c95693f0a098e48df2a15e.jpg",
      name: "Oreo Chocolate Cake",
      price: 700,
      description: "Chocolate sponge loaded with Oreo cookies and creamy frosting."
    },
    {
      image: "https://i.pinimg.com/736x/d1/ee/58/d1ee585810262e0a5dc1dc87727b898d.jpg",
      name: "Mango Cake",
      price: 650,
      description: "Soft sponge cake filled with sweet and tangy mango mousse."
    },
    {
      image: "https://i.pinimg.com/236x/a5/64/96/a5649696820f245896c91be907f036d0.jpg",
      name: "Coffee Walnut Cake",
      price: 750,
      description: "Rich coffee-flavoured cake topped with crunchy walnuts."
    }
  ];

  return (
    <>
      <div className='heading'>
        <h1>Varieties of Cakes</h1>
      </div>
      <div className='parent'>
        {
          cakes.map(function(elem, idx){
            return <div key={idx}>
              <Card img={elem.image} title={elem.name} pay={elem.price} desc={elem.description}/>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App