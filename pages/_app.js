// @flow

import { useEffect } from 'react';
import * as React from 'react';
import fbt from 'fbt';
import Head from 'next/head';
import sx from '@adeira/sx';
import { RecoilRoot } from 'recoil';
import { SkipLink, SxDesignProvider } from '@adeira/sx-design';
import { RelayEnvironmentProvider, RelayRehydratePreloadedQueries } from '@adeira/relay';
import { useRouter } from 'next/router';

import './_app.css';
import recordPageVisit from '../src/analytics/recordPageVisit';
import RelayEnvironment from '../src/RelayEnvironment';
import ViewerContextProvider from '../src/ViewerContextProvider';
import initFbtTranslations from '../translations/initFbtTranslations';

type Props = {
  +Component: $FlowFixMe,
  +pageProps: $FlowFixMe,
};

export default function MyApp({ Component, pageProps }: Props): React.Node {
  const router = useRouter();
  const languageTag = initFbtTranslations(router.locale);

  useEffect(() => {
    if (!__DEV__) {
      recordPageVisit(RelayEnvironment);
    }
  });

  return (
    <React.StrictMode>
      <SxDesignProvider locale={languageTag.bcp47} theme="light">
        <RelayEnvironmentProvider environment={RelayEnvironment}>
          <ViewerContextProvider languageTag={languageTag}>
            <RecoilRoot>
              <div className={styles('root')}>
                <Head>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <SkipLink
                  text={
                    <fbt desc="hidden 'skip link' title which helps blind people to skip directly the main section and avoid the repetitive menu altogether">
                      Skip to content
                    </fbt>
                  }
                />
                <RelayRehydratePreloadedQueries Component={Component} pageProps={pageProps} />
              </div>
            </RecoilRoot>
          </ViewerContextProvider>
        </RelayEnvironmentProvider>
      </SxDesignProvider>
    </React.StrictMode>
  );
}

const styles = sx.create({
  root: {
    color: 'rgba(var(--sx-background))',
  },
});
