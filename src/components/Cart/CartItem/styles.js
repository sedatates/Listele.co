import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
    objectFit: 'cover'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  card:{
    margin:'3px'
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));