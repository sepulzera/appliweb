import React from 'react';

import Header from '../../components/Header/Header';
import { Container } from '@material-ui/core';
import Footer from '../../components/Footer/Footer';
import Paper from '../../components/Ui/Paper';

import useStyles from './PageWithHeaderAndFooter.style';

/**
 * {@link PageWithHeaderAndFooter} Props.
 */
interface IPageWithHeaderAndFooterProps {
  /** Header title to render. */
  header:   string;
  /** Main page content. */
  children: React.ReactNode;
}

/**
 * Default page layout with a defined header and footer.
 * Use this for the usual subpages, where no own fancy layout is needed.
 *
 * @param props - {@link IPageWithHeaderAndFooterProps}
 */
const PageWithHeaderAndFooter: React.FC<IPageWithHeaderAndFooterProps> = (props: IPageWithHeaderAndFooterProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Header title={props.header} />
        <Container>
          <Paper>
            {props.children}
          </Paper>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default PageWithHeaderAndFooter;
