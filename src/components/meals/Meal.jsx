import styled from 'styled-components'
import { MealItem } from './meal-item/MealItem'

 const Meals = ({ meals, isLoading, error}) => {

  return (
    <Card>
      { isLoading && <p>Loading.......</p>}
      { error && <p style={{color: "red"}}>{error}</p>}
      {
       meals.map((elem) => {
          return <MealItem
            key={elem.id}
            title={elem.title}
            description={elem.description}
            price={elem.price}
            id={elem._id}
          />
        })
      }
    </Card>
  )
}

export default Meals;
const Card = styled.ul`
  position: relative;
  width: 1039px;
  padding: 40px;
  background: #FFFFFF;
  border-radius: 16px;
  margin: 40px auto;
`