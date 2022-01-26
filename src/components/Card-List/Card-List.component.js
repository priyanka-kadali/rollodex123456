import Card from '../Card/Card.component'
import './Card-List.styles.css'

const CardList = (props)  => {
    
    const {monsters} = props
   return(
       <div className='card-list'>
            {
                monsters.map(
                    element => (
                        <Card user={element} />
                    )
                )
            }
       </div>
   )
}

export default CardList