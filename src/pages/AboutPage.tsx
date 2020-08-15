/* eslint-disable jsx-a11y/accessible-emoji, react/jsx-one-expression-per-line, react/no-unescaped-entities */
import React from 'react';
import { useTranslation, withTranslation, WithTranslation, Trans } from 'react-i18next';

import PageWithHeaderAndFooter from '../hoc/Page/PageWithHeaderAndFooter';
import H from '../components/Ui/H';
import P from '../components/Ui/P';
import Link from '../components/Ui/Link';
import Emoji from '../components/Ui/Emoji';
import Table, { column } from '../components/Ui/Table';
import EmojiWord from '../components/Ui/EmojiWord';

/**
 * Component rendering some kind of beautiful readme about this app.
 *
 * See also: {@link AboutPage}
 */
const About: React.FC<WithTranslation> = () => {
  const { t } = useTranslation();

  const libraryTableColumns: Array<column> = [
    {
      name: 'library',
      title: t('about:libraries th library'),
      width: '15em',
    },
    {
      name: 'usecase',
      title: t('about:libraries th usecase'),
    },
  ];

  const productionLibraries = [
    {
      id:      'material-ui',
      library: <Link href='https://github.com/mui-org/material-ui' target='_blank'>Material-UI</Link>,
      usecase: <Trans i18nKey='about:libraries production material-ui'>UI Framework providing React components based on <em>Material Design</em>, plus icons.</Trans>,
    },
    {
      id:      'react',
      library: <Link href='https://reactjs.org/' target='_blank'>React</Link>,
      usecase: t('about:libraries production react'),
    },
    {
      id:      'react-i18next',
      library: <Link href='https://react.i18next.com/' target='_blank'>react-i18next</Link>,
      usecase: t('about:libraries production react-i18next'),
    },
    {
      id:      'react-router',
      library: <Link href='https://github.com/ReactTraining/react-router' target='_blank'>react-router</Link>,
      usecase: t('about:libraries production react-router'),
    },
  ];

  const developmentLibraries = [
    {
      id:     'eslint',
      library: <Link href='https://eslint.org/' target='_blank'>ESLint</Link>,
      usecase: t('about:libraries development eslint'),
    },
    {
      id:     'react-styleguidist',
      library: <Link href='https://react-styleguidist.js.org/' target='_blank'>React Styleguidist</Link>,
      usecase: t('about:libraries development react-styleguidist'),
    },
    {
      id:     'stylelint',
      library: <Link href='https://github.com/stylelint/' target='_blank'>Stylelint</Link>,
      usecase: t('about:libraries development stylelint'),
    },
    {
      id:     'typescript',
      library: <Link href='https://github.com/microsoft/TypeScript' target='_blank'>TypeScript</Link>,
      usecase: t('about:libraries development typescript'),
    },
  ];

  return (
    <PageWithHeaderAndFooter header={t('about:about')}>
      <H variant='h2'>{t('about:intro heading')}</H>
      <P><Trans i18nKey='about:intro 1'>Hey! <Emoji>👋</Emoji></Trans></P>
      <P><Trans i18nKey='about:intro 2'>This is AppliWeb, my Application on Web. It is my personal project to show off my web development skills. If you are looking for a <strong>highly motivated</strong> and <strong>energetic</strong> web developer, feel free to contact me via <Link href='https://xing.com' target='_blank'>XING</Link>.</Trans></P>

      <H variant='h2'><Trans i18nKey='about:used technologies heading'><Emoji>🚀</Emoji> Used technologies</Trans></H>
      <P><Trans i18nKey='about:used technologies 1'>Of course I didn't code everything on my own. AppliWeb relies on many <em>Open-Source libraries</em> hacked by many <em>awesome developers</em>. My greatest thanks to you! <Emoji>🙏</Emoji></Trans></P>
      <P><Trans i18nKey='about:used technologies 2'>On it's core, this project was bootstrapped with <Link href='https://github.com/facebook/create-react-app' target='_blank'>Create-React-App</Link>/<Link href='https://reactjs.org/' target='_blank'>React</Link> by Facebook. The UI is build on <Link href='https://github.com/mui-org/material-ui' target='_blank'>Material-UI</Link>, that provides powerful React components based on <em>Google</em>'s <strong>Material Design</strong>.</Trans></P>
      <P><Trans i18nKey='about:used technologies 3'>Therefore, the used programming languages are mainly <strong>HTML</strong>, <strong>CSS</strong> and <strong>TypeScript</strong>.</Trans></P>

      <H variant='h2'><Trans i18nKey='about:buzzwords heading'><Emoji>🤓</Emoji> Some more buzzwords</Trans></H>
      <P><Trans i18nKey='about:buzzwords 1'>AppliWeb supports <Emoji>📱</Emoji>&nbsp;<strong>responsive design</strong> up to mobile devices and is <Emoji>♿</Emoji>&nbsp;<strong>accessible</strong> for mostly everyone. It is available in two languages, <EmojiWord emoji='🇺🇸'>english</EmojiWord> and <EmojiWord emoji='🇩🇪'>german</EmojiWord>. Plus it supports a <EmojiWord emoji='🔆'>light</EmojiWord> and a <EmojiWord emoji='🌙'>dark theme</EmojiWord>.</Trans></P>

      <H variant='h2'><Trans i18nKey='about:libraries heading'><Emoji>📚</Emoji> Used Libraries</Trans></H>
      <P>{t('about:libraries 1')}</P>
      <Table
          caption = {t('about:libraries production heading')}
          columns = {libraryTableColumns}
          data    = {productionLibraries} />
      <Table
          caption = {t('about:libraries development heading')}
          columns = {libraryTableColumns}
          data    = {developmentLibraries} />
      <P><Trans i18nKey='about:libraries 2'>There are some more. Check out the <Link href='https://github.com/sepulzera/appliweb/blob/master/package.json' target='_blank'>package.json</Link> for a full overview.</Trans></P>

      <H variant='h2'><Trans i18nKey='about:documentation heading'><Emoji>📝</Emoji> Documentation</Trans></H>
      <P><Trans i18nKey='about:documentation 1'>The <Link href={`${process.env.PUBLIC_URL}/doc/index.html`}>code documentation</Link> is available as offline HTML documentation.</Trans></P>
      <P><Trans i18nKey='about:documentation 2'>The documentation is based on <Link href='https://github.com/microsoft/tsdoc' target='_blank'>TSDoc</Link>, generated with <Link href='https://react-styleguidist.js.org/' target='_blank'>React Styleguidist</Link>.</Trans></P>

      <H variant='h2'><Trans i18nKey='about:contributing heading'><Emoji>🐞</Emoji> Contributing</Trans></H>
      <P><Trans i18nKey='about:contributing 1'>This is my personal project. I do not accept code as contributions. However, ideas and feedback are much appreciated and can be filed via the project's <Link href='https://github.com/sepulzera/appliweb/issues' target='_blank'>issues-tracker</Link>.</Trans></P>

      <H variant='h2'><Trans i18nKey='about:author heading'><Emoji>⚖️</Emoji> Author and License</Trans></H>
      <P><Trans i18nKey='about:author 1'><Link href='https://github.com/sepulzera/' target='_blank'>Frank Hartung</Link>.</Trans></P>
      <P><Trans i18nKey='about:author 2'>MIT License, see <Link href='https://github.com/sepulzera/appliweb/blob/master/LICENSE' target='_blank'>License</Link> for further information.</Trans></P>
    </PageWithHeaderAndFooter>
  );
};

export default withTranslation()(About);
