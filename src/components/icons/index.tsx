import IconAddressMark from "./adress-mark";
import IconLabel from "./icon-label";
import IconArrowDown from "./arrow-down";
import IconArrowLongLeft from "./arrow-long-left";
import IconArrowLongRight from "./arrow-long-right";
import IconArrowLongRightSx from "./arrow-long-right-sx";
import IconArrowPaginateLeft from "./arrow-paginate-left";
import IconArrowPaginateRight from "./arrow-paginate-right";
import IconArrowReadMore from "./arrow-readmore-";
import IconArrowShortRight from "./arrow-short-right";
import IconClose from "./close";
import IconDropdown from "./dropdown";
import IconError from "./error-icon";
import FactoriesInterestMaker from "./factories-inter-maker";
import FactoriesMaker from "./factories-maker";
import IconGlobal from "./global";
import IconHamburger from "./hamburger";
import IconExpandRecap from "./icon-expand";
import IconPlay from "./icon-play";
import IconSearch from "./icon-search";
import IconWarning from "./icon-warning";
import LocationMakerIcon from "./location-maker";
import SearchInputIcon from "./search-input";
import TickIcon from "./tick";
import IconVerticalTwoLine from "./vertical-two-line";
import IconBlockFooter from "./icon-block-footer";
import IconFacebook from "./facebook";
import IconTwitter from "./twitter";
import IconInstagram from "./instagram";
import IconLinkIn from "./linkin";

const IconComponent = {
  close: IconClose,
  global: IconGlobal,
  dropdown: IconDropdown,
  hamburger: IconHamburger,

  "arrow-long-left": IconArrowLongLeft,
  "arrow-long-right": IconArrowLongRight,
  "location-maker": LocationMakerIcon,
  "factories-maker": FactoriesMaker,
  "factories-inter-maker": FactoriesInterestMaker,
  "arrow-down": IconArrowDown,
  "arrow-paginate-right": IconArrowPaginateRight,
  "arrow-paginate-left": IconArrowPaginateLeft,
  "arrow-read-more": IconArrowReadMore,
  "arrow-short-right": IconArrowShortRight,
  "icon-play": IconPlay,
  "icon-vertical-two-line": IconVerticalTwoLine,
  "ic-expand-recap": IconExpandRecap,
  "ic-address-mark": IconAddressMark,
  "tick-icon": TickIcon,
  "arrow-long-right-xs": IconArrowLongRightSx,
  "icon-search": IconSearch,
  "icon-search-input": SearchInputIcon,
  "icon-error": IconError,
  "icon-warning": IconWarning,
  "icon-label": IconLabel,
  "icon-block-footer": IconBlockFooter,
  "icon-facebook": IconFacebook,
  "icon-twitter": IconTwitter,
  "icon-instagram": IconInstagram,
  "icon-linkin": IconLinkIn,
};

export interface IconProps {
  icon?: IconType;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
  size?: number;
  color?: string;
}

export type IconType = keyof typeof IconComponent;

const Icons = ({ icon, ...res }: IconProps) => {
  const Icon = IconComponent[icon as IconType];

  if (!Icon) return null;

  return <Icon {...res} />;
};

export default Icons;
