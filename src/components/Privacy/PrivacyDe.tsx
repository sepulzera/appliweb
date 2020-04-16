import React from 'react';
import { Typography, Link } from '@material-ui/core';

const PrivacyDe: React.FC<{}> = () => (
  <>
    <Typography variant='body1'>Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen und nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.</Typography>
    <Typography variant='body1'>Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt), gilt als „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.</Typography>
    <Typography variant='body1'>Mit der nachfolgenden Datenschutzerklärung informieren wir Sie insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit wir entweder allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu Optimierungszwecken sowie zur Steigerung der Nutzungsqualität eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum eigener Verantwortung verarbeiten.</Typography>
    <Typography variant='body1'>Unsere Datenschutzerklärung ist wie folgt gegliedert:</Typography>
    <ul>
      <li>I. Informationen über uns als Verantwortliche</li>
      <li>II. Rechte der Nutzer und Betroffenen</li>
      <li>III. Informationen zur Datenverarbeitung</li>
    </ul>

    <Typography variant='h2' component='h3'>I. Informationen über uns als Verantwortliche</Typography>
    <Typography variant='body1'>Verantwortlicher Anbieter dieses Internetauftritts im datenschutzrechtlichen Sinne ist:</Typography>
    <ul>
      {/* TODO remove dots: list-style-type: none; */}
      <li>Frank Hartung</li>
      <li>99096 Erfurt</li>
      <li>Deutschland</li>
      <li>Telefon: Telefonnummer</li>
      <li>E-Mail: muster@mustermail.xy</li>
    </ul>

    <Typography variant='h2' component='h3'>II. Rechte der Nutzer und Betroffenen</Typography>
    <Typography variant='body1'>Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die Nutzer und Betroffenen das Recht</Typography>
    <ul>
      <li>auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die verarbeiteten Daten, auf weitere Informationen über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);</li>
      <li>auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch Art. 16 DSGVO);</li>
      <li>auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO;</li>
      <li>auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);</li>
      <li>auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).</li>
    </ul>
    <Typography variant='body1'>Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede Berichtigung oder Löschung von Daten oder die Einschränkung der Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft über diese Empfänger.</Typography>
    <Typography variant='body1'><strong>Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch gegen die künftige Verarbeitung der sie betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft.</strong></Typography>

    <Typography variant='h2' component='h3'>III. Informationen zur Datenverarbeitung</Typography>
    <Typography variant='body1'>Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der Löschung der Daten keine gesetzlichen Aufbewahrungspflichten entgegenstehen und nachfolgend keine anderslautenden Angaben zu einzelnen Verarbeitungsverfahren gemacht werden.</Typography>

    <Typography variant='body1'>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <Link href='https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html' target='_blank' rel='noopener'>Muster-Datenschutzerklärung</Link> der <Link href='https://www.ratgeberrecht.eu/datenschutz/datenschutzerklaerung-generator-dsgvo.html'>Anwaltskanzlei Weiß &amp; Partner</Link>
    </Typography>
  </>
);

export default PrivacyDe;