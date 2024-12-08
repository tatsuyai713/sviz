// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { SvgIcon, SvgIconProps } from "@mui/material";

export function SORALogo(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox="-20 -20 100 100" {...props}>
      <title>SORA</title>
      <g fill="#FFFFFF">
        <path d="M295.386,384.344C296.699,384.344 297.765,384.199 298.584,383.91C300.138,383.356 300.914,382.326 300.914,380.821C300.914,379.941 300.529,379.261 299.758,378.78C298.987,378.31 297.777,377.894 296.127,377.533L293.309,376.901C290.539,376.274 288.623,375.594 287.563,374.859C285.769,373.63 284.871,371.709 284.871,369.096C284.871,366.711 285.739,364.73 287.473,363.152C289.207,361.574 291.755,360.785 295.115,360.785C297.921,360.785 300.315,361.529 302.297,363.017C304.278,364.504 305.317,366.663 305.413,369.493L300.065,369.493C299.969,367.891 299.27,366.753 297.97,366.078C297.103,365.633 296.025,365.41 294.736,365.41C293.302,365.41 292.158,365.699 291.303,366.277C290.448,366.855 290.02,367.663 290.02,368.698C290.02,369.65 290.442,370.36 291.285,370.83C291.827,371.143 292.983,371.511 294.754,371.932L299.343,373.034C301.354,373.516 302.871,374.161 303.895,374.967C305.485,376.22 306.28,378.033 306.28,380.405C306.28,382.838 305.35,384.859 303.489,386.466C301.628,388.075 298.999,388.878 295.603,388.878C292.134,388.878 289.406,388.087 287.419,386.503C285.432,384.919 284.438,382.742 284.438,379.972L289.75,379.972C289.918,381.188 290.249,382.098 290.743,382.7C291.646,383.796 293.194,384.344 295.386,384.344Z"/>
      </g>
    </SvgIcon>
  );
}