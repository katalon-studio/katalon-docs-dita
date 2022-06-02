import React from 'react';
import { Hit as AlgoliaHit } from '@algolia/client-search';
import { useHits, UseHitsProps } from 'react-instantsearch-hooks';
import styles from './styles.module.scss';

export type HitsProps<THit> = React.ComponentProps<'div'> &
  UseHitsProps & {
    hitComponent: (props: { hit: THit }) => JSX.Element;
  };

export function Hits<THit extends AlgoliaHit<Record<string, unknown>>>({
  hitComponent: Hit,
  ...props
}: HitsProps<THit>) {
  
  var { hits, results } = useHits(props);
  // hits = hits.slice(0, 5);
  var isNoResult = hits.length == 0;

  return (
    <div style={{ height: "300px", overflowY: "scroll" }}>
      {hits.map((hit) => (
        <div key={hit.objectID} className="ais-Hits-item">
          <Hit hit={hit as unknown as THit} />
        </div>
      ))}
      {isNoResult && viewNoResult(results.query)}
    </div>
  );
}


function viewNoResult(query) {
  return (
    <div>
      <svg style={{ margin: 'auto', display: 'flex', marginTop: '2rem' }}width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg>
      <p className={styles.noResult}>No results for "<span style={{ fontWeight: '500' }}>{query}</span>"</p>
    </div>
  )
}