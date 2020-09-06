import { useSession } from 'next-auth/client'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'
import { Svg } from 'react-optimized-image'

import { Header } from '../../components/Header/Header'
import { LoginBar } from '../../components/LoginBar/LoginBar'
import ErrorBoundary from '../../util/ErrorBoundary'
import { getI18nPaths, getI18nProps, withI18n } from '../../util/i18n'
import HeaderImage from './assets/undraw_Login.svg'

export function Account(): JSX.Element {
  const { t } = useTranslation()
  const [session] = useSession()
  const hasSession =
    typeof session === 'object' && typeof session?.user === 'object'

  const { name = '' } = hasSession ? session.user : {}

  return (
    <ErrorBoundary>
      <Head>
        <title>{t('Account:pageTitle')}</title>
        <meta name="description" content={t('Account:pageDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div
        data-test-id="Account"
        className="flex flex-col items-center justify-center min-h-full p-2"
      >
        <main>
          <Svg src={HeaderImage} />
          <h2>{t('Account:h1')}</h2>
          <p>{t('Account:intro')}</p>
          {hasSession ? (
            <>
              <h3>{t('Account:helloTitle')}</h3>
              <p>{t('Account:hello', { name })}</p>
            </>
          ) : (
            <>
              <h3>{t('Account:signInTitle')}</h3>
              <p>{t('Account:signIn')}</p>
              <LoginBar />
            </>
          )}
        </main>
      </div>
    </ErrorBoundary>
  )
}

export const getStaticProps = async (ctx) => ({
  props: await getI18nProps(ctx, ['common', 'Account']),
})

export const getStaticPaths = async () => ({
  paths: getI18nPaths(),
  fallback: false,
})

export default withI18n(Account)
