import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header/Header';
import { Container } from '@material-ui/core';
import Footer from '../../components/Footer/Footer';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  container: {
    flex: '1 1 1px',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
});

interface IProps {
  header: string;
}

const PageWithHeaderAndFooter: React.FC<IProps> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Header title={props.header} />
        <Container>
          {props.children}
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default PageWithHeaderAndFooter;
