import type { SearchClient } from 'algoliasearch/lite';
import type { BaseItem } from '@algolia/autocomplete-core';
import type { AutocompleteOptions } from '@algolia/autocomplete-js';

import React, {
  createElement,
  ReactElement,
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react';
import { render } from 'react-dom';

import {
  useSearchBox,
} from 'react-instantsearch-hooks';
import { autocomplete } from '@algolia/autocomplete-js';
import { debounce } from '@algolia/autocomplete-shared';
import { cx } from "../utils";
import '@algolia/autocomplete-theme-classic';
import styles from './styles.module.scss';

type AutocompleteProps = Partial<AutocompleteOptions<BaseItem>> & {
  searchClient: SearchClient;
  className?: string;
  hideResult: (boolean) => void;
};

type SetInstantSearchUiStateOptions = {
  query: string;
};

export function Autocomplete({
  searchClient,
  className,
  hideResult,
  ...autocompleteProps
}: AutocompleteProps) {
  const autocompleteContainer = useRef<HTMLDivElement>(null);

  const { query, refine: setQuery } = useSearchBox();

  const [
    instantSearchUiState,
    setInstantSearchUiState,
  ] = useState<SetInstantSearchUiStateOptions>({ query });
  const debouncedSetInstantSearchUiState = debounce(
    setInstantSearchUiState,
    0
  );

  useEffect(() => {
    if (instantSearchUiState.query !== "") {
      setQuery(instantSearchUiState.query);
    } else {
      hideResult(true);
    }
  }, [instantSearchUiState]);

  useEffect(() => {
    if (!autocompleteContainer.current) {
      return;
    }

    const autocompleteInstance = autocomplete({
      ...autocompleteProps,
      classNames: {
        form: cx(styles.formContainer),
        input: cx(styles.inputSearch),
      },
      container: autocompleteContainer.current,
      initialState: { query },
      onReset() {
        hideResult(true);
        setInstantSearchUiState({ query: '' });
      },
      onSubmit({ state }) {
        setInstantSearchUiState({ query: state.query });
      },
      onStateChange({ prevState, state }) {
        hideResult(state.query === "");
        if (prevState.query !== state.query) {
          debouncedSetInstantSearchUiState({
            query: state.query,
          });
        }
      },
      renderer: {
        createElement,
        Fragment,
      },
      render({ children }, root) {
        render(children as ReactElement, root);
      },
    });

    return () => autocompleteInstance.destroy();
  }, []);

  return <div className={className} ref={autocompleteContainer} />;
}
