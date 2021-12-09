// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { createContext, useContext } from "react";

import { PromptOptions } from "@foxglove/studio-base/hooks/usePrompt";
import { Player, PlayerMetricsCollectorInterface } from "@foxglove/studio-base/players/types";
import ConsoleApi from "@foxglove/studio-base/services/ConsoleApi";

export type DataSourceFactoryInitializeArgs = {
  metricsCollector: PlayerMetricsCollectorInterface;
  unlimitedMemoryCache: boolean;
  rosHostname?: string;
  folder?: FileSystemDirectoryHandle;
  file?: File;
  files?: File[];
  url?: string;
  consoleApi?: ConsoleApi;
} & Record<string, unknown>;

export interface IDataSourceFactory {
  id: string;
  displayName: string;
  iconName?: RegisteredIconNames;
  disabledReason?: string | JSX.Element;
  badgeText?: string;
  hidden?: boolean;

  // If data source initialization supports "Open File" workflow, this property lists the supported
  // file types
  supportedFileTypes?: string[];

  supportsMultiFile?: boolean;

  promptOptions?: (previousValue?: string) => PromptOptions;

  // Initialize a player.
  initialize: (args: DataSourceFactoryInitializeArgs) => Player | undefined;
}

/**
 * Recently selected source information
 *
 * The _id_ is opaque and up to the PlayerSelectionContext implementation.
 */
export type RecentSource = {
  id: string;
  title: string;
  label?: string;
};

/**
 * PlayerSelectionContext exposes the available data sources and a function to set the current data source
 */
export interface PlayerSelection {
  selectSource: (sourceId: string, args?: Record<string, unknown>) => void;
  selectRecent: (recentId: string) => void;

  /** Currently selected data source */
  selectedSource?: IDataSourceFactory;

  /** List of available data sources */
  availableSources: IDataSourceFactory[];

  /** Recently selected sources */
  recentSources: RecentSource[];
}

const PlayerSelectionContext = createContext<PlayerSelection>({
  selectSource: () => {},
  selectRecent: () => {},
  availableSources: [],
  recentSources: [],
});

export function usePlayerSelection(): PlayerSelection {
  return useContext(PlayerSelectionContext);
}

export default PlayerSelectionContext;
