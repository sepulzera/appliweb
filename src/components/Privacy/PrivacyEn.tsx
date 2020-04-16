/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Typography, Link } from '@material-ui/core';

const PrivacyEn: React.FC<{}> = () => (
  <>
    <Typography variant='body1'>Personal data (usually referred to just as "data" below) will only be processed by us to the extent necessary and for the purpose of providing a functional and user-friendly website, including its contents, and the services offered there.</Typography>
    <Typography variant='body1'>Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter referred to as the "GDPR"), "processing" refers to any operation or set of operations such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment, or combination, restriction, erasure, or destruction performed on personal data, whether by automated means or not.</Typography>
    <Typography variant='body1'>The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and legal basis for the processing of such data either under our own control or in conjunction with others. We also inform you below about the third-party components we use to optimize our website and improve the user experience which may result in said third parties also processing data they collect and control.</Typography>
    <Typography variant='body1'>Our privacy policy is structured as follows:</Typography>
    <ul>
      <li>I. Information about us as controllers of your data</li>
      <li>II. The rights of users and data subjects</li>
      <li>III. Information about the data processing</li>
    </ul>

    <Typography variant='h2' component='h3'>I. Information about us as controllers of your data</Typography>
    <Typography variant='body1'>The party responsible for this website (the "controller") for purposes of data protection law is:</Typography>
    <ul>
      {/* TODO remove dots: list-style-type: none; */}
      <li>Frank Hartung</li>
      <li>99096 Erfurt</li>
      <li>Germany</li>
      <li>Telephone: Telephone number</li>
      <li>Email: muster@mustermail.xy</li>
    </ul>
    <Typography variant='body1'>The controller's data protection officer is:</Typography>
    <ul>
      {/* TODO remove dots: list-style-type: none; */}
      <li>Frank Hartung</li>
      <li>99096 Erfurt</li>
      <li>Germany</li>
    </ul>

    <Typography variant='h2' component='h3'>II. The rights of users and data subjects</Typography>
    <Typography variant='body1'>With regard to the data processing to be described in more detail below, users and data subjects have the right</Typography>
    <ul>
      <li>to confirmation of whether data concerning them is being processed, information about the data being processed, further information about the nature of the data processing, and copies of the data (cf. also Art. 15 GDPR);</li>
      <li>to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);</li>
      <li>to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if further processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing per Art. 18 GDPR;</li>
      <li>to receive copies of the data concerning them and/or provided by them and to have the same transmitted to other providers/controllers (cf. also Art. 20 GDPR);</li>
      <li>to file complaints with the supervisory authority if they believe that data concerning them is being processed by the controller in breach of data protection provisions (see also Art. 77 GDPR).</li>
    </ul>
    <Typography variant='body1'>In addition, the controller is obliged to inform all recipients to whom it discloses data of any such corrections, deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR. However, this obligation does not apply if such notification is impossible or involves a disproportionate effort. Nevertheless, users have a right to information about these recipients.</Typography>
    <Typography variant='body1'><strong>Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the controller's future processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to data processing for the purpose of direct advertising is permissible.</strong></Typography>

    <Typography variant='h2' component='h3'>III. Information about the data processing</Typography>
    <Typography variant='body1'>Your data processed when using our website will be deleted or blocked as soon as the purpose for its storage ceases to apply, provided the deletion of the same is not in breach of any statutory storage obligations or unless otherwise stipulated below.</Typography>

    <Typography variant='body1'>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <Link href='https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html' target='_blank' rel='noopener'>Model Data Protection Statement</Link> for <Link href='https://www.ratgeberrecht.eu/' target='_blank'>Anwaltskanzlei Weiß &amp; Partner</Link>
    </Typography>
  </>
);

export default PrivacyEn;
