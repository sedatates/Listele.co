import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(() => ({
  root:{
    maxWidth: '100%',
  },
  media:{
    height:'300px',
    width:'100%',
    maxWidth:'400px',
    paddingtop: '56.25%',
    marginLeft:'auto',
    marginRight: 'auto',
    objectFit:'contain'
  },
  cardActions: {
    display:'flex',
    justifyContent:'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));