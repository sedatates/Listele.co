import React from "react";
// eslint-disable-next-line
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleEmptyCart,
  handleRemoveFromCart,
}) => {
  const classes = useStyles();

  const renderEmptyCart = () => (
    <>
      <Typography variant="h5" className={classes.link}>
        You dont have any item on Cart{" "} 
        <Link to="/" className={classes.link} >
          start adding some 🛒
        </Link>
      </Typography>
    </>
  );

  if (!cart.line_items) return "loading";

  const filledCart = () => (
    <>
      <Typography className={classes.title} variant="h3">
        Your Cart
      </Typography>

      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid items xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            ></CartItem>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal : {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty
          </Button>

          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      {!cart.line_items.length ? renderEmptyCart() : filledCart()}
    </Container>
  );
};

export default Cart;
