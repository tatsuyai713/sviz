// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { StoryFn, StoryObj } from "@storybook/react";
import { ReactNode } from "react";

import BaseUserContext, {
  CurrentUser,
  UserType,
} from "@foxglove/studio-base/context/BaseUserContext";
import PlayerSelectionContext, {
  PlayerSelection,
} from "@foxglove/studio-base/context/PlayerSelectionContext";
import MockCurrentLayoutProvider from "@foxglove/studio-base/providers/CurrentLayoutProvider/MockCurrentLayoutProvider";
import WorkspaceContextProvider from "@foxglove/studio-base/providers/WorkspaceContextProvider";

import { DataSourceDialog } from "./DataSourceDialog";

const Wrapper = (Story: StoryFn): JSX.Element => {
  return (
    <MockCurrentLayoutProvider>
      <WorkspaceContextProvider
        initialState={{
          dialogs: {
            dataSource: {
              activeDataSource: undefined,
              item: "start",
              open: true,
            },
            preferences: {
              initialTab: undefined,
              open: false,
            },
          },
        }}
      >
        <Story />
      </WorkspaceContextProvider>
    </MockCurrentLayoutProvider>
  );
};

export default {
  title: "components/DataSourceDialog/Start",
  component: DataSourceDialog,
  parameters: { colorScheme: "dark" },
  decorators: [Wrapper],
};

// Connection
const playerSelection: PlayerSelection = {
  selectSource: () => {},
  selectRecent: () => {},
  recentSources: [
    {
      id: "1111",
      title: "NuScenes-v1.0-mini-scene-0655-reallllllllly-long-name-8829908290831091.bag",
    },
    {
      id: "2222",
      title: "http://localhost:11311",
      label: "ROS 1",
    },
    {
      id: "3333",
      title: "ws://localhost:9090/",
      label: "Rosbridge (ROS 1 & 2)",
    },
    {
      id: "4444",
      title: "ws://localhost:8765",
      label: "Foxglove WebSocket",
    },
    {
      id: "5555",
      title: "ws://1.2.3.4:8765",
      label: "Foxglove WebSocket",
    },
    {
      id: "6666",
      title: "THIS ITEM SHOULD BE HIDDEN IN STORYBOOKS",
      label: "!!!!!!!!!!!!",
    },
  ],
  availableSources: [
    {
      id: "foo",
      type: "connection",
      displayName: "My Data Source",
      description: "Data source description",
      iconName: "ROS",
      warning: "This is a warning",

      formConfig: {
        fields: [{ id: "key", label: "Some Label" }],
      },

      initialize: () => {
        return undefined;
      },
    },
  ],
};

function CurrentUserWrapper(props: {
  children: ReactNode;
  userType?: UserType | undefined;
}): JSX.Element {
  const value: CurrentUser = {
    currentUserType: props.userType ?? "authenticated-team",
    signIn: () => undefined,
    signOut: async () => undefined,
  };
  return <BaseUserContext.Provider value={value}>{props.children}</BaseUserContext.Provider>;
}

const Default = (): JSX.Element => <DataSourceDialog backdropAnimation={false} />;

export const DefaultLight: StoryObj = {
  render: Default,
  name: "Default (light)",
  parameters: { colorScheme: "light" },
};

export const DefaultDark: StoryObj = {
  render: Default,
  name: "Default (dark)",
  parameters: { colorScheme: "dark" },
};

export const UserNoAuth: StoryObj = {
  render: () => {
    return (
      <PlayerSelectionContext.Provider value={playerSelection}>
        <DataSourceDialog backdropAnimation={false} />
      </PlayerSelectionContext.Provider>
    );
  },
  name: "User not authenticated",
};

export const UserNoAuthChinese: StoryObj = {
  ...UserNoAuth,
  name: "User not authenticated Chinese",
  parameters: { forceLanguage: "zh" },
};

export const UserNoAuthJapanese: StoryObj = {
  ...UserNoAuth,
  name: "User not authenticated Japanese",
  parameters: { forceLanguage: "ja" },
};

export const UserPrivate: StoryObj = {
  render: () => {
    return (
      <CurrentUserWrapper>
        <PlayerSelectionContext.Provider value={playerSelection}>
          <DataSourceDialog backdropAnimation={false} />
        </PlayerSelectionContext.Provider>
      </CurrentUserWrapper>
    );
  },
  name: "User not authenticated (private)",
};

export const UserPrivateChinese: StoryObj = {
  ...UserPrivate,
  name: "User not authenticated (private) Chinese",
  parameters: { forceLanguage: "zh" },
};

export const UserPrivateJapanese: StoryObj = {
  ...UserPrivate,
  name: "User not authenticated (private) Japanese",
  parameters: { forceLanguage: "ja" },
};

export const UserAuthedPaid: StoryObj = {
  render: () => {
    return (
      <CurrentUserWrapper userType="authenticated-team">
        <PlayerSelectionContext.Provider value={playerSelection}>
          <DataSourceDialog backdropAnimation={false} />
        </PlayerSelectionContext.Provider>
      </CurrentUserWrapper>
    );
  },
  name: "User Authenticated with Paid Account",
};

export const UserAuthedPaidChinese: StoryObj = {
  ...UserAuthedPaid,
  name: "User Authenticated with Paid Account Chinese",
  parameters: { forceLanguage: "zh" },
};

export const UserAuthedPaidJapanese: StoryObj = {
  ...UserAuthedPaid,
  name: "User Authenticated with Paid Account Japanese",
  parameters: { forceLanguage: "ja" },
};
