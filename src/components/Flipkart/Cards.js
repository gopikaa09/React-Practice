
import style from '../Flipkart/Cards.css'
export function Cards(props){
    const {ImageUrl,text1,text2}=props
    return(
        <div className='cardscontainer'>
        <img src={ImageUrl}>

        </img>
        <p>{text1}</p>
        <h5>{text2}</h5>
        </div>
    )
    
}
