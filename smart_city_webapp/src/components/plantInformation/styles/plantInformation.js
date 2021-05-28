import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    width: '100%',
    overflow: 'hidden',
  },
  plantPicture: {
    maxWidth: '49%',
    maxHeight: 450,
    objectFit: 'cover',
    width: 'auto',
    height: '450px',
    float: 'left',
    marginTop: 25,
    marginLeft: 25,
    //    border: '1px solid red',
  },
  plantInfo: {
    width: '49%',
    //  border: '1px solid green',
    float: 'left',
  },
  plantInfoSubtitle: {
    // paddingTop: '-500px',
  },
}));
