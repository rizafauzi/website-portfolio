import { ColorType } from "@styles/color.type";

export const textWeight = (weight: string) => {
  switch (weight) {
    case "bold":
      return "font-bold";
    case "normal":
      return "font-normal";
    case "semibold":
      return "font-semibold";
    default:
      break;
  }
};

export const textSize = (size: string, screen?: string) => {
  if (screen === "lg") {
    switch (size) {
      case "xsmall":
        return "lg:text-xsmall";
      case "small":
        return "lg:text-small";
      case "medium":
        return "lg:text-medium";
      case "large":
        return "lg:text-large";
      case "xlarge":
        return "lg:text-xlarge";
      case "xxlarge":
        return "lg:text-xxlarge";
      case "d-xsmall":
        return "lg:text-d-xsmall";
      case "d-small":
        return "lg:text-d-small";
      case "d-medium":
        return "lg:text-d-medium";
      case "d-large":
        return "lg:text-d-large";
      case "d-xlarge":
        return "lg:text-d-xlarge";
      default:
        break;
    }
  }
  switch (size) {
    case "xsmall":
      return "text-xxsmall";
    case "small":
      return "text-xsmall";
    case "medium":
      return "text-small";
    case "large":
      return "text-medium";
    case "xlarge":
      return "text-large";
    case "xxlarge":
      return "text-xlarge";
    case "d-xsmall":
      return "text-xxlarge";
    case "d-small":
      return "text-d-xsmall";
    case "d-medium":
      return "text-d-small";
    case "d-large":
      return "text-d-medium";
    case "d-xlarge":
      return "text-d-large";
    default:
      break;
  }
};

export const textColor = (color: ColorType) => {
  switch (color) {
    case "primary-100":
      return "text-primary-100";
    case "primary-200":
      return "text-primary-200";
    case "primary-300":
      return "text-primary-300";
    case "primary-400":
      return "text-primary-400";
    case "primary-500":
      return "text-primary-500";
    case "secondary-100":
      return "text-secondary-100";
    case "secondary-200":
      return "text-secondary-200";
    case "secondary-300":
      return "text-secondary-300";
    case "secondary-400":
      return "text-secondary-400";
    case "secondary-500":
      return "text-secondary-500";
    case "grey-50":
      return "text-grey-50";
    case "grey-100":
      return "text-grey-100";
    case "grey-200":
      return "text-grey-200";
    case "grey-300":
      return "text-grey-300";
    case "grey-400":
      return "text-grey-400";
    case "grey-500":
      return "text-grey-500";
    case "grey-600":
      return "text-grey-600";
    case "grey-700":
      return "text-grey-700";
    case "grey-800":
      return "text-grey-800";
    case "grey-900":
      return "text-grey-900";
    case "blue-50":
      return "text-blue-50";
    case "blue-250":
      return "text-blue-250";
    case "blue-400":
      return "text-blue-400";
    case "blue-500":
      return "text-blue-500";
    case "loss-100":
      return "text-loss-100";
    case "grey-unknown":
      return "text-grey-unknown";
    case "profit-100":
      return "text-profit-100";
    case "bg-base":
      return "text-bg-base";
    case "bg-disable":
      return "text-bg-disable";
    case "bg-overlay":
      return "text-bg-overlay";
    case "bg-sheet":
      return "text-bg-sheet";
    case "neutral-50":
      return "text-neutral-50";
    case "neutral-100":
      return "text-neutral-100";
    case "neutral-200":
      return "text-neutral-200";
    case "neutral-300":
      return "text-neutral-300";
    case "neutral-400":
      return "text-neutral-400";
    case "text-disable":
      return "text-text-disable";
    case "text-50":
      return "text-text-50";
    case "text-100":
      return "text-text-100";
    case "text-300":
      return "text-text-300";
    case "text-500":
      return "text-text-500";
    case "divider-100":
      return "text-divider-100";
    case "line-100":
      return "text-line-100";
    case "success-50":
      return "text-success-50";
    case "success-100":
      return "text-success-100";
    case "success-300":
      return "text-success-300";
    case "success-400":
      return "text-success-400";
    case "success-500":
      return "text-success-500";
    case "error-50":
      return "text-error-50";
    case "error-100":
      return "text-error-100";
    case "error-300":
      return "text-error-300";
    case "error-400":
      return "text-error-400";
    case "error-500":
      return "text-error-500";
    case "notice-100":
      return "text-notice-100";
    case "notice-500":
      return "text-notice-500";
    case "warning-100":
      return "text-warning-100";
    case "warning-500":
      return "text-warning-500";
    case "icon-primary":
      return "text-icon-primary";
    case "icon-secondary":
      return "text-icon-secondary";
    case "icon-tertiary":
      return "text-icon-tertiary";
    case "icon-disable":
      return "text-icon-disable";
    case "turq":
      return "text-turq";
    case "teal":
      return "text-teal";
    case "honey":
      return "text-honey";
    case "raspberry":
      return "text-raspberry";
    case "dark-blue":
      return "text-dark-blue";
    case "purple":
      return "text-purple";
    case "pink":
      return "text-pink";
    case "red":
      return "text-red";
    case "orange":
      return "text-orange";
    case "white":
      return "text-white";
    case "black":
      return "text-black";
    case "sapphire":
      return "text-sapphire";
    case "profit":
      return "text-profit";
  }
};
