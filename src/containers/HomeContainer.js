import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart,removeToCart } from "../Services/actions/action";

const mapStateToProps=state=>({
    cardData:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addCarHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)