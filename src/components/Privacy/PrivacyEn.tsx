/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import P from '../Ui/P';
import H from '../Ui/H';
import Link from '../Ui/Link';
import List from '../Ui/List';
import ListItem from '../Ui/ListItem';

const PrivacyEn: React.FC<{}> = () => (
  <>
    <P>Personal data (usually referred to just as "data" below) will only be processed by us to the extent necessary and for the purpose of providing a functional and user-friendly website, including its contents, and the services offered there.</P>
    <P>Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter referred to as the "GDPR"), "processing" refers to any operation or set of operations such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment, or combination, restriction, erasure, or destruction performed on personal data, whether by automated means or not.</P>
    <P>The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and legal basis for the processing of such data either under our own control or in conjunction with others. We also inform you below about the third-party components we use to optimize our website and improve the user experience which may result in said third parties also processing data they collect and control.</P>
    <P>Our privacy policy is structured as follows:</P>
    <List>
      <ListItem>I. Information about us as controllers of your data</ListItem>
      <ListItem>II. The rights of users and data subjects</ListItem>
      <ListItem>III. Information about the data processing</ListItem>
    </List>

    <H variant='h2'>I. Information about us as controllers of your data</H>
    <P>The party responsible for this website (the "controller") for purposes of data protection law is:</P>
    <P component='address'>
      Frank Hartung
      <br />
      99096 Erfurt
      <br />
      Germany
      <br />
      Telephone: Telephone number
      <br />
      Email: muster@mustermail.xy
    </P>
    <P>The controller's data protection officer is:</P>
    <P component='address'>
      Frank Hartung
      <br />
      99096 Erfurt
      <br />
      Germany
    </P>

    <H variant='h2'>II. The rights of users and data subjects</H>
    <P>With regard to the data processing to be described in more detail below, users and data subjects have the right</P>
    <List>
      <ListItem>to confirmation of whether data concerning them is being processed, information about the data being processed, further information about the nature of the data processing, and copies of the data (cf. also Art. 15 GDPR);</ListItem>
      <ListItem>to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);</ListItem>
      <ListItem>to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if further processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing per Art. 18 GDPR;</ListItem>
      <ListItem>to receive copies of the data concerning them and/or provided by them and to have the same transmitted to other providers/controllers (cf. also Art. 20 GDPR);</ListItem>
      <ListItem>to file complaints with the supervisory authority if they believe that data concerning them is being processed by the controller in breach of data protection provisions (see also Art. 77 GDPR).</ListItem>
    </List>
    <P>In addition, the controller is obliged to inform all recipients to whom it discloses data of any such corrections, deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR. However, this obligation does not apply if such notification is impossible or involves a disproportionate effort. Nevertheless, users have a right to information about these recipients.</P>
    <P><strong>Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the controller's future processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to data processing for the purpose of direct advertising is permissible.</strong></P>

    <H variant='h2'>III. Information about the data processing</H>
    <P>Your data processed when using our website will be deleted or blocked as soon as the purpose for its storage ceases to apply, provided the deletion of the same is not in breach of any statutory storage obligations or unless otherwise stipulated below.</P>

    <P>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <Link href='https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html' target='_blank'>Model Data Protection Statement</Link> for <Link href='https://www.ratgeberrecht.eu/' target='_blank'>Anwaltskanzlei Weiß &amp; Partner</Link>
    </P>
  </>
);

export default PrivacyEn;
